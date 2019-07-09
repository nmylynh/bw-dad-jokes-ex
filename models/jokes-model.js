const db = require('../database/dbConfig.js');
const helper = require('./helpers/joke-helper');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    filter
}

function find() {
    let loadJokes = db('jokes');

    return loadJokes.then(jokes => {
        return jokes.map(joke => helper.convertBoolean(joke));
      });
}

function findById(id) {
    return db('jokes')
    .where({ id })
    .first()
}

function filter() {
    return db('jokes')
    .where({
        public: true,
      });
}

async function add(role) {
const [id] = await db('jokes').insert(role);

return findById(id);
}

function update(id, changes) {
    return db('jokes')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('jokes')
    .where({ id })
    .del();
}