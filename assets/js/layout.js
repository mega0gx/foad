// Get the first header and footer elements
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

// Load header.js first
function loadHeaderScript() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = './assets/js/header.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Load header content and initialize
loadHeaderScript()
    .then(() => {
        // Now load header content
        return fetch('./sections/header.html');
    })
    .then(response => response.text())
    .then(data => {
        header.innerHTML = data;
        // Now we can safely call initializeHeader because the function is loaded
        initializeHeader();
    })
    .catch(error => console.error('Error:', error));

// Load footer
fetch('./sections/footer.html')
    .then(response => response.text())
    .then(data => {
        footer.innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));