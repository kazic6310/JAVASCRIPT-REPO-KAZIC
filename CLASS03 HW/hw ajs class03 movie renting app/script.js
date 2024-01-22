document.addEventListener('DOMContentLoaded', function () {
    let movieArray = ['Inception', 'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', 'Pulp Fiction', 'Fight Club', 'Forrest Gump'];

    let searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', searchMovie);

    function searchMovie() {
        let userInput = document.getElementById('movieInput').value.toLowerCase();
        let resultContainer = document.getElementById('resultContainer');

        // za lowercase array
        let lowercaseMovieArray = movieArray.map(movie => movie.toLowerCase());

        if (lowercaseMovieArray.indexOf(userInput) !== -1) {
            showResult('The movie can be rented', 'success');
        } else {
            showResult('The movie cannot be rented', 'error');
        }
    }

    function showResult(message, className) {
        let resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = `<h1 class="${className}">${message}</h1>`;
    }
});
