    document.addEventListener('DOMContentLoaded', (event) => {
        hljs.highlightAll();
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Twitter loader animation
        setTimeout(function() {
            var loaderContainer = document.querySelector('.loader-container');
            loaderContainer.style.opacity = '0';
            loaderContainer.style.visibility = 'hidden';
        }, 1000);


        // Highlight inline code
        document.querySelectorAll('code:not(pre code)').forEach(function(codeElement) {
            if (!codeElement.classList.contains('inline-code')) {
                codeElement.classList.add('inline-code');
            }
            hljs.highlightElement(codeElement);
        });
    });


// Favorite button (just because)
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('.favorite-button').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
            });
        });
    });
