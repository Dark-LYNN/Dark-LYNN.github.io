// script.js
function displayDirectoryListing() {
    fetch('output.json') // Replace with the path to your JSON file
        .then(response => response.json())
        .then(data => {
            const fileList = document.getElementById('fileList');
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.type}</td>
                    <td>${item.size}</td>
                    <td>${new Date(item.dateModified * 1000).toLocaleString()}</td>
                `;
                fileList.appendChild(row);
            });
        })
        .catch(error => console.error(error));
}

displayDirectoryListing();
