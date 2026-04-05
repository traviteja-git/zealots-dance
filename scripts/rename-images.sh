#!/bin/bash
# Renames gallery images to SEO-friendly names
# zealots_corporate_01.jpg, zealots_sangeeth_01.jpg, zealots_workshops_01.jpg

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/Zealots"

rename_folder() {
  local folder="$1"
  local prefix="$2"
  local n=1

  while IFS= read -r -d '' img; do
    ext=$(echo "${img##*.}" | tr '[:upper:]' '[:lower:]')
    # Skip HEIC
    if [[ "$ext" == "heic" ]]; then
      echo "SKIP: $(basename "$img")"
      continue
    fi
    # Skip .DS_Store
    if [[ "$(basename "$img")" == ".DS_Store" ]]; then
      continue
    fi
    newname=$(printf "%s_%02d.%s" "$prefix" "$n" "$ext")
    newpath="$folder/$newname"
    echo "$(basename "$img") → $newname"
    mv "$img" "$newpath"
    ((n++))
  done < <(find "$folder" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0 | sort -z)
}

echo "=== Corporate Events ==="
rename_folder "$DIR/Corporate Events" "zealots_corporate"

echo ""
echo "=== Sangeeth ==="
rename_folder "$DIR/Sangeeth" "zealots_sangeeth"

echo ""
echo "=== Workshops ==="
rename_folder "$DIR/Workshops" "zealots_workshops"

echo ""
echo "Done."
