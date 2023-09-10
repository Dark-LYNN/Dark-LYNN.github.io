from PIL import Image
import os
import json

# JSON file generation
current_directory = os.path.dirname(os.path.abspath(__file__))
root_directory = os.path.join(current_directory)

# TIFF to PNG conversion and file deletion
for file in os.listdir('.'):
    if file.endswith('.tif'):
        tif_path = file
        png_path = os.path.splitext(file)[0] + '.png'

        try:
            im = Image.open(tif_path)
            im.save(png_path)
            os.remove(tif_path)  # Delete the original .tif file
            print(f"Converted {tif_path} to {png_path} and removed original")
        except Exception as e:
            print(f"Failed to convert {tif_path}: {str(e)}")

# Function to rename .ogg files in a directory
def rename_ogg_files(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.ogg'):
            new_filename = filename.split('-', 1)[-1].strip()  # Remove everything before the first hyphen
            new_path = os.path.join(directory, new_filename)
            os.rename(os.path.join(directory, filename), new_path)
            print(f"Renamed {filename} to {new_filename}")

if __name__ == "__main__":
    input_directory = os.path.join(current_directory)
    rename_ogg_files(input_directory)


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

# HTML file generation
html_content = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/images/Overwatch_circle_logo.svg.png">
    <title>CDN - Lynnux</title>
    <link rel="stylesheet" type="text/css" href="/style.css">

    <!-- Discord Embed -->
    <meta property="og:title" content="Overwatch V2.6.0.1 Kiriko Content" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://cdn.lynnux.xyz/overwatch/v2.6.0.1/" />
    <meta name="theme-color" content="#91484F">
    <meta name="twitter:card" content="summary_large_image">
</head>
<body>
    <h1>/v2.6.0.1/Hero's/</h1>
    <div id="container">
        <table class="sortable">
            <thead>
                <tr >
                    <th>Filename</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Date Modified</th>
                </tr>
            </thead>
            <tr class='directory'>
                <td><a href='../' class='name'>...</a></td>
                <td><a href='../'>&lt;GO BACK&gt;</a></td>
                <td sorttable_customkey='1'><a href='../'>N/A</a></td>
                <td sorttable_customkey='1'><a href='../'>N/A</a></td>
            </tr>
            <tbody id="fileList"></tbody>
        </table>
    </div>
    <button id="mode-toggle">
        <ion-icon name="moon-outline"></ion-icon>
    </button>
    <script src="script.js"></script>
    <script src="/mode.js"></script>
</body>
</html>
"""

html_file_path = os.path.join(root_directory, 'index.html')

with open(html_file_path, 'w', encoding='utf-8') as html_file:
    html_file.write(html_content)

print(f'HTML file has been generated and saved to {html_file_path}')

# JavaScript file generation
js_content = """
// Function to convert size from KB to bytes and remove letters
function convertSizeToBytes(size) {
    // Remove any non-numeric characters (letters, spaces, etc.)
    const numericString = size.replace(/[^0-9.]/g, '');
    // Convert the numeric string to a floating-point number
    const numericValue = parseFloat(numericString);
    // Check if the size string contains 'KB' and convert to bytes
    if (size.toLowerCase().includes('kb')) {
        return numericValue * 1024; // 1 KB = 1024 bytes
    } else {
        return numericValue; // Already in bytes or unknown format
    }
} 

// script.js
function displayDirectoryListing() {
    console.log("Fetching JSON data...")
    const fileList = document.getElementById('fileList');
    fetch('output.json')
        .then(response => response.json())
        .then(data => {
            const filteredFiles = data.filter(item => !item.name.endsWith('.html') && !item.name.endsWith('.json') && !item.name.endsWith('.py') && !item.name.endsWith('.js'));

            filteredFiles.forEach(item => {
                const itemName = item.name.split('/').pop();
                const sizeInBytes = convertSizeToBytes(item.size);

                // Check if it's a directory or a file
                const isDirectory = item.type === "Directory";
                const typeText = isDirectory ? "<DIRECTORY>" : `${item.type.toUpperCase()} file`;

                // Check if the item is not in a subdirectory
                const isFileInSubdirectory = item.name.split('/').length > 1;

                if (!isFileInSubdirectory) {
                    const row = document.createElement('tr');
                    const typeClass = isDirectory ? "folder" : "image";
                    row.innerHTML = `
                        <td><a class="name">${itemName}</a></td>
                        <td><a class="${typeClass}">${item.type}</a></td>
                        <td sorttable_customkey="${sizeInBytes}"><a>${item.size}</a></td>
                        <td sorttable_customkey="${item.dateModified}"><a>${new Date(item.dateModified * 1000).toLocaleString()}</a></td>
                    `;

                    // Add an event listener to the table row to make it clickable
                    row.addEventListener('click', function () {
                        // Get the filename from the first cell of the clicked row
                        const fileName = row.querySelector('td:first-child').textContent;

                        // If it's not an HTML or JSON file, navigate to it (replace 'your_base_url' with your actual base URL)
                        if (!fileName.endsWith('.html') && !fileName.endsWith('.json')) {
                            const fileUrl = `./${fileName}`; // Construct the URL
                            window.location.href = fileUrl; // Navigate to the URL
                        }
                    });

                    fileList.appendChild(row);
                }
            });
        })
        .catch(error => console.error(error));
}

displayDirectoryListing();
"""

js_file_path = os.path.join(root_directory, 'script.js')

with open(js_file_path, 'w', encoding='utf-8') as js_file:
    js_file.write(js_content)

print(f'JavaScript file has been generated and saved to {js_file_path}')