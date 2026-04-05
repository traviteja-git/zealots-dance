#!/bin/bash
# Compresses and resizes images in public/Zealots/ using macOS built-in sips
# - Resizes to max 1200px on the longest side (only downscales, never upscales)
# - Sets JPEG/PNG quality to 80%
# - Skips HEIC files (not browser-compatible)

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/Zealots"
COUNT=0
SKIPPED=0
BEFORE=0
AFTER=0

echo "Compressing images in: $DIR"
echo "---"

while IFS= read -r -d '' img; do
  ext="${img##*.}"
  extlower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

  if [[ "$extlower" == "heic" ]]; then
    echo "SKIP (HEIC): $(basename "$img")"
    ((SKIPPED++))
    continue
  fi

  before=$(stat -f%z "$img")
  BEFORE=$((BEFORE + before))

  # Resize longest side to max 1200px, set quality to 80
  sips --resampleHeightWidthMax 1200 --setProperty formatOptions 80 "$img" --out "$img" > /dev/null 2>&1

  after=$(stat -f%z "$img")
  AFTER=$((AFTER + after))

  saved=$(( (before - after) * 100 / before ))
  echo "OK: $(basename "$img")  $(( before / 1024 ))KB → $(( after / 1024 ))KB  (-${saved}%)"
  ((COUNT++))

done < <(find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

echo "---"
echo "Done: $COUNT images compressed, $SKIPPED skipped"
echo "Total: $(( BEFORE / 1024 ))KB → $(( AFTER / 1024 ))KB  (saved $(( (BEFORE - AFTER) / 1024 ))KB)"
