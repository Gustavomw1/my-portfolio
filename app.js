document.addEventListener("DOMContentLoaded", function() {
    const contents = document.querySelectorAll('.content');

    function checkVisibility() {
        contents.forEach(content => {
            const rect = content.getBoundingClientRect();

            // Verifica se o elemento está visível na viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                content.classList.add('show');
            }
        });
    }

    // Verifica visibilidade ao carregar a página
    checkVisibility();

    // Verifica visibilidade ao rolar a página
    window.addEventListener('scroll', checkVisibility);
});
