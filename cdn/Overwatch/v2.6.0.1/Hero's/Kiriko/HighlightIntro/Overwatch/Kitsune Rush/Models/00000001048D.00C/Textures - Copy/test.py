from PIL import Image
import os
import json

# TIFF to PNG conversion
for file in os.listdir('.'):
    if file.endswith('.tif'):
        im = Image.open(file)
        im.save(os.path.splitext(file)[0] + '.png')

# JSON file generation
current_directory = os.path.dirname(os.path.abspath(__file__))
root_directory = os.path.join(current_directory)

def generate_directory_listing(directory):
    listing = []
    for item in os.listdir(directory):
        item_path = os.path.join(directory, item)
        if os.path.isfile(item_path) or os.path.isdir(item_path):
            item_type = "&lt;DIRECTORY&gt;" if os.path.isdir(item_path) else os.path.splitext(item)[1].upper() + " file"
            item_size = "N/A" if os.path.isdir(item_path) else f"{os.path.getsize(item_path) / 1024:.2f} KB"
            item_date_modified = os.path.getmtime(item_path)
            relative_path = os.path.relpath(item_path, root_directory)
            listing.append({
                "name": relative_path.replace("\\", "/"),
                "type": item_type,
                "size": item_size,
                "dateModified": item_date_modified
            })
    return listing

directory_data = generate_directory_listing(root_directory)

output_json_file = os.path.join(root_directory, 'output.json')

with open(output_json_file, 'w', encoding='utf-8') as json_file:
    json.dump(directory_data, json_file, indent=4)

print(f'Directory listing data has been generated and saved to {output_json_file}')
