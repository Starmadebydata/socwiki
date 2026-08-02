Client screenshot drop zone
===========================

1. Capture skill / build screens from the SoC mobile client or emulator.
2. Name files:
     {slug}.png
     {slug}-skills.png
     {slug}-build.png
     {slug}-1.png

   Examples:
     col-skills.png
     sp-inanna-build.png
     taair.png

3. Run:
     npm run collect:ocr

4. Review:
     content/collected/{slug}.json

5. Validate + merge:
     npm run collect:validate
     npm run collect:merge -- --write
