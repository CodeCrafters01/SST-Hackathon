
const searchInput = document.querySelector('.search-bar input[type="text"]');
const moviePosters = document.querySelectorAll('.movie-poster');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase(); // Convert search query to lowercase

    moviePosters.forEach((poster) => {
        const movieTitle = poster.querySelector('h2').textContent.toLowerCase(); // Convert movie title to lowercase
        if (movieTitle.includes(searchTerm)) {
            poster.style.display = 'block';
        } else {
            poster.style.display = 'none';
        }
    });
});


