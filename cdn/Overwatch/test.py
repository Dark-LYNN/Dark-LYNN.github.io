import os
import json

# Specify the root directory
root_directory = r'E:\Codes\Akira-OpenSource\Dark-LYNN.github.io\cdn\Overwatch'

# Function to generate directory listing data for a given directory
def generate_directory_listing(directory):
    listing = []
    for item in os.listdir(directory):
        item_path = os.path.join(directory, item)
        item_type = "&lt;DIRECTORY&gt;" if os.path.isdir(item_path) else os.path.splitext(item)[1].upper() + " file"
        item_size = "N/A" if os.path.isdir(item_path) else f"{os.path.getsize(item_path) / 1024:.2f} KB"
        item_date_modified = os.path.getmtime(item_path)
        relative_path = os.path.relpath(item_path, root_directory)  # Get relative path
        listing.append({
            "name": relative_path.replace("\\", "/"),  # Use forward slashes in the path
            "type": item_type,
            "size": item_size,
            "dateModified": item_date_modified
        })
    return listing

# Function to recursively generate directory listing data for all folders
def generate_directory_tree(root):
    data = []
    for foldername, subfolders, filenames in os.walk(root):
        listing = generate_directory_listing(foldername)
        data.extend(listing)
    return data

# Generate the directory listing data for the root directory
directory_data = generate_directory_tree(root_directory)

# Define the path for the output JSON file
output_json_file = os.path.join(root_directory, 'output.json')

# Write the directory listing data to the output JSON file
with open(output_json_file, 'w', encoding='utf-8') as json_file:
    json.dump(directory_data, json_file, indent=4)

print(f'Directory listing data has been generated and saved to {output_json_file}')
