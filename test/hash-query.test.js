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