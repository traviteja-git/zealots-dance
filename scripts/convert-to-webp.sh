#!/bin/bash
# Converts all gallery images to WebP using macOS built-in sips
# Keeps originals in place, creates .webp copies alongside them

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/Zealots"
COUNT=0

echo "Converting images to WebP in: $DIR"
echo "---"

while IFS= read -r -d '' img; do
  ext=$(echo "${img##*.}" | tr '[:upper:]' '[:lower:]')
  [[ "$ext" == "heic" || "$ext" == "webp" ]] && continue

  outfile="${img%.*}.webp"
  sips --setProperty format webp --setProperty formatOptions 82 "$img" --out "$outfile" > /dev/null 2>&1

  before=$(stat -f%z "$img")
  after=$(stat -f%z "$outfile")
  saved=$(( (before - after) * 100 / before ))
  echo "$(basename "$outfile")  $(( before / 1024 ))KB → $(( after / 1024 ))KB  (-${saved}%)"
  ((COUNT++))

done < <(find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

echo "---"
echo "Done: $COUNT WebP files created"
