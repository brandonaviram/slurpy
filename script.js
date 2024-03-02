// script.js

document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const scrapeButton = document.getElementById('scrapeButton');
    const contentContainer = document.getElementById('contentContainer');

    scrapeButton.addEventListener('click', () => {
        const url = urlInput.value;
        if (url) {
            // Simulate scraping process
            contentContainer.innerHTML = `<p>Scraping content from: ${url}</p>`;
        } else {
            alert('Please enter a URL.');
        }
    });

    // Toggle dark mode
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.container, #contentContainer').forEach(el => {
        el.classList.toggle('dark-mode');
    });
});
