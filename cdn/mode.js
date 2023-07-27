document.addEventListener('DOMContentLoaded', function() {
    const modeToggleBtn = document.getElementById('mode-toggle');
    const bodyElement = document.body;

    // Check if the user's dark mode preference is already set in localStorage
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');

    // Apply the dark mode class if the preference is set or saved
    if (isDarkModeEnabled === 'true') {
        bodyElement.classList.add('dark-mode');
    }

    modeToggleBtn.addEventListener('click', function() {
        // Toggle the dark mode class on the body element
        bodyElement.classList.toggle('dark-mode');

        // Save the dark mode preference in localStorage
        const isCurrentlyDarkMode = bodyElement.classList.contains('dark-mode');
        localStorage.setItem('darkModeEnabled', isCurrentlyDarkMode.toString());
    });
});
