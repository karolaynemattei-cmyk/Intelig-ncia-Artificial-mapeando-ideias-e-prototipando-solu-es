document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.btn-like');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countSpan = button.querySelector('.count');
            let currentLikes = parseInt(countSpan.textContent, 10);

            if (button.classList.contains('liked')) {
                button.classList.remove('liked');
                countSpan.textContent = currentLikes - 1;
            } else {
                button.classList.add('liked');
                countSpan.textContent = currentLikes + 1;
            }
        });
    });
});
