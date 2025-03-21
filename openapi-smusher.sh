#!/usr/bin/env bash
set -e
set -o pipefail

# Print error message and exit
print_error_and_exit() {
  echo -e "\033[31m$1\033[0m" >&2
  exit 1
}

# Check if a command exists
command_exists() {
  command -v "$1" &> /dev/null
}

# Download OpenAPI files
download_openapi_files() {
  local temp_dir=$1
  local openapis=$2

  # Download each file silently
  for api in $openapis; do
    local name="${api%=*}"
    local url="${api#*=}"
    local local_file="$temp_dir/$name.json"

    # Download file silently, no echoing
    if ! curl --silent --fail --output "$local_file" "$url"; then
      echo "$url does not exist or is invalid. Please provide a valid path." >&2
      return 1
    fi

    # Output only the file path
    echo "$local_file"
  done
}

# Execute redocly join command
execute_redocly_join() {
  local main_file="$1"
  shift
  local join_command="redocly join \"$main_file\""

  # Add each file to the command
  for file in "$@"; do
    join_command+=" \"$file\""
  done

  join_command+=" --output \"$OUTPUT\" --prefix-tags-with-info-prop title --prefix-components-with-info-prop title"

  echo "Executing: $join_command"
  eval $join_command

  if [[ $? -ne 0 ]]; then
    print_error_and_exit "Failed to execute redocly join command"
  fi
}

# Parse command-line arguments
parse_arguments() {
  while [ $# -gt 0 ]; do
    case "$1" in
      --spec*|-s*)
        if [[ "$1" != *=* ]]; then shift; fi
        SPEC="${1#*=}"
        ;;
      --output*|-o*)
        if [[ "$1" != *=* ]]; then shift; fi
        OUTPUT="${1#*=}"
        ;;
      *)
        print_error_and_exit "Error: Invalid argument"
        ;;
    esac
    shift
  done

  # Validate required arguments
  if [ -z "$SPEC" ] || [ -z "$OUTPUT" ]; then
    print_error_and_exit "Error: --spec and --output arguments are required"
  fi
}

# Update smusher-config.json with provided spec and output
update_config() {
  echo "Updating smusher-config.json..."
  jq --arg spec "$SPEC" --arg output "$OUTPUT" '."input-file"= $spec | ."output-file"= $output' \
    smusher-config.json > tmp-smusher-config.json && mv tmp-smusher-config.json smusher-config.json

  if [[ $? -ne 0 ]]; then
    print_error_and_exit "Failed to update smusher-config.json"
  fi
  echo "Updated smusher-config.json successfully."
}

main() {
  parse_arguments "$@"

  # Check for required dependencies
  for cmd in jq curl redocly; do
    if ! command_exists $cmd; then
      print_error_and_exit "'$cmd' could not be found. It is a requirement."
    fi
  done

  update_config

  TEMP_DIR=$(mktemp -d)
  trap 'rm -rf -- "$TEMP_DIR"; echo "Cleaned up temporary files."' EXIT INT TERM

  echo "Parsing smusher-config.json..."
  MAIN_FILE=$(jq -r '."input-file"' smusher-config.json)
  OPENAPIS=$(jq -r '.["openapis-to-smush"][] | "\(.name)=\(.["openapi-url"])"' smusher-config.json)

  if [[ $? -ne 0 ]]; then
    print_error_and_exit "Failed to parse smusher-config.json"
  fi

  echo "Downloading OpenAPI files..."

  # Create an array to store downloaded files
  DOWNLOADED_FILES=()

  # Read output into array without using readarray
  while IFS= read -r line; do
    DOWNLOADED_FILES+=("$line")
  done < <(download_openapi_files "$TEMP_DIR" "$OPENAPIS")

  if [[ $? -ne 0 ]]; then
    exit 1
  fi

  echo "Downloaded OpenAPI files successfully."

  # Log the redocly join command
  local join_command="redocly join \"$MAIN_FILE\" ${DOWNLOADED_FILES[*]} --output \"$OUTPUT\" --prefix-tags-with-info-prop title --prefix-components-with-info-prop title"
  echo "Executing redocly join command: $join_command"

  execute_redocly_join "$MAIN_FILE" "${DOWNLOADED_FILES[@]}"

  echo "OpenAPI files have been successfully merged into $OUTPUT"
}

main "$@"