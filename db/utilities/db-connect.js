const pgp = require('pg-promise')();
const database = pgp('postgres://localhost:5432/banana');

module.exports = database;
