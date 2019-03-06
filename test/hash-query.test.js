const test = QUnit.test;

QUnit.module('hash');

import { writeSearchToQuery } from '../src/hash-query.js';

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

import { writePageToQuery } from '../src/hash-query.js';

test('write page to query', assert => {
    // arrange
    const existingQuery = 'searchTerm=star+wars&page=5';
    const page = 2;
    // act
    const result = writePageToQuery(existingQuery, page); 
    // assert
    assert.equal(result, 'searchTerm=star+wars&page=2');
});

import { readFromQuery } from '../src/hash-query.js';

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