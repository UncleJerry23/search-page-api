export function movieTemplate(movie) {
    const year = movie.release_date.split('-');
    
    const template = document.createElement('template');
    template.innerHTML = `
    <div id="movie-poster">
        <h3>${movie.title}</h3>
        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}" alt="img">
        <h4>${year[0]}</h4>
    </div>
    `;
    return template.content;
}

const movieContainer = document.getElementById('movies-container');

export default function loadMovies(allMovies) {
    allMovies.forEach(movie => {
        const dom = movieTemplate(movie);
        movieContainer.appendChild(dom);
    });
}