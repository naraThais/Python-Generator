import os

ASSETS_DIR = "assets"
OUTPUT_FILE = "gallery.html"

VALID_EXTENSIONS = (".jpg", ".jpeg", ".png", ".gif", ".webp")

unique_files = set()

for file in os.listdir(ASSETS_DIR):
    if file.lower().endswith(VALID_EXTENSIONS):
        unique_files.add(file) 
files = sorted(unique_files)

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    f.write('<main class="gallery">\n')
    for file in files:
        f.write(f'  <img src="assets/{file}" alt="" />\n')
    f.write('</main>\n')

print(f"Galeria gerada com {len(files)} imagens (sem duplicatas).")
