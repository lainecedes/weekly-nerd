 // Initialize Highlight.js after the DOM has loaded
    document.addEventListener('DOMContentLoaded', (event) => {
        // Highlight all code blocks on the page
        hljs.highlightAll();
    });



// Favorite button
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('.favorite-button').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
            });
        });
    });
