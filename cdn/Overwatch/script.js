// script.js
function displayDirectoryListing() {
    fetch('output.json') // Replace with the path to your JSON file
        .then(response => response.json())
        .then(data => {
            console.log(data); // Add this line to inspect the data
            const currentDirectory = window.location.pathname; // Get the current directory path from the URL
            const fileList = document.getElementById('fileList');

            data.filter(item => {
                // Check if the item belongs to the current directory (based on the current path)
                // and is not an HTML or JSON file
                const itemName = item.name.split('/').pop(); // Extract the filename or subdirectory name
                return item.name.startsWith(currentDirectory) &&
                       !itemName.endsWith('.html') &&
                       !itemName.endsWith('.json');
            }).forEach(item => {
                // Extract the filename or subdirectory name without path
                const itemName = item.name.split('/').pop();

                // Check if the item is not in a subdirectory
                const isFileInSubdirectory = item.name.split('/').length > 1;

                if (!isFileInSubdirectory) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${itemName}</td>
                        <td>${item.type}</td>
                        <td>${item.size}</td>
                        <td>${new Date(item.dateModified * 1000).toLocaleString()}</td>
                    `;
                    fileList.appendChild(row);
                }
            });
        })
        .catch(error => console.error(error));
}

displayDirectoryListing();
