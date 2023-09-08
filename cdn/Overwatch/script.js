// script.js
function displayDirectoryListing() {
    console.log("Fetching JSON data...")
    const fileList = document.getElementById('fileList');
    fetch('output.json')
      .then(response => response.json())
      .then(data => {
        const filteredFiles = data.filter(item => !item.name.endsWith('.html') && !item.name.endsWith('.json'));
    
        filteredFiles.forEach(item => {
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

            // Add an event listener to the table row to make it clickable
            row.addEventListener('click', function () {
              // Get the filename from the first cell of the clicked row
              const fileName = row.querySelector('td:first-child').textContent;

              // If it's not an HTML or JSON file, navigate to it (replace 'your_base_url' with your actual base URL)
              if (!fileName.endsWith('.html') && !fileName.endsWith('.json')) {
                const fileUrl = `your_base_url/${fileName}`; // Construct the URL
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


// script.js
/*function displayDirectoryListing() {
    console.log("Fetching JSON data...")
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
            console.log("JSON data fetched")
        })
        .catch(error => console.error(error));
        
}

displayDirectoryListing(); */

