const test = QUnit.test;

QUnit.module('hash');

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);

    return searchParams.toString();
}

test('add query to empy hash', assert => {
    // arrange
    const existingQuery = '';
    const searchTerm = 'star wars';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=star+wars&page=1');
});

test('update existing hash', assert => {
    // arrange
    const existingQuery = 'searchTerm=star+wars&page=5';
    const searchTerm = 'harry potter';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=harry+potter&page=1');
});




function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);

    return searchParams.toString();
}

test('write page to query', assert => {
    // arrange
    const existingQuery = 'searchTerm=star+wars&page=5';
    const page = 2;
    // act
    const result = writePageToQuery(existingQuery, page); 
    // assert
    assert.equal(result, 'searchTerm=star+wars&page=2');
});


function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const pageNumber = parseInt(searchParams.get('page')) || 1;
    const result = {
        searchTerm: searchParams.get('searchTerm'),
        page: pageNumber
    };
    return result;
}


test('reads options from query', assert => {
    // arrange
    const query = 'searchTerm=star+wars&page=3';
    const expected = {
        searchTerm: 'star wars',
        page: 3
    };
    // act
    const results = readFromQuery(query);
    // assert
    assert.deepEqual(results, expected);
});

test('if query has no page return 1', assert => {
    // arrange
    const query = 'searchTerm=harry+potter';
    const expected = {
        searchTerm: 'harry potter',
        page: 1
    };
    // act
    const result = readFromQuery(query);
    // assert
    assert.deepEqual(result, expected);
});