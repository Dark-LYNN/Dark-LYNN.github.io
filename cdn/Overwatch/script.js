// script.js
function displayDirectoryListing() {
    fetch('output.json') // Replace with the path to your JSON file
        .then(response => response.json())
        .then(data => {
            const currentDirectory = window.location.pathname; // Get the current directory path from the URL
            const fileList = document.getElementById('fileList');
            
            data.filter(item => {
                // Check if the item belongs to the current directory and is not an HTML or JSON file
                return item.name !== '..' && 
                       item.name.startsWith(currentDirectory) &&
                       !item.name.endsWith('.html') && 
                       !item.name.endsWith('.json');
            }).forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.type}</td>
                    <td>${item.size}</td>
                    <td>${new Date(item.dateModified * 1000).toLocaleString()}</td>
                `;
                fileList.appendChild(row);
            });
            console.log('Current Directory:', currentDirectory);
        })
        .catch(error => console.error(error));
}

displayDirectoryListing();
