const test = QUnit.test;

QUnit.module('movie template');

import { movieTemplate } from '../src/movies.js';

test('movie template makes html', assert => {
    // arrange
    const movie = {
        'vote_count': 10870,
        'id': 11,
        'video': false,
        'vote_average': 8.2,
        'title': 'Star Wars',
        'popularity': 34.363,
        'poster_path': '/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg',
        'original_language': 'en',
        'original_title': 'Star Wars',
        'genre_ids': [
            12,
            28,
            878
        ],
        'backdrop_path': '/4iJfYYoQzZcONB9hNzg0J0wWyPH.jpg',
        'adult': false,
        'overview': 'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
        'release_date': '1977-05-25'
    };
    // act
    const results = movieTemplate(movie);
    // assert
    assert.htmlEqual(results, `
    <div id="movie-poster">
        <h3>Star Wars</h3>
        <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg" alt="img">
        <h4>1977</h4>
    </div>
    `);
});