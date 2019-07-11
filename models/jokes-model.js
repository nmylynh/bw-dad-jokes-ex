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
    let loadJokes = db('jokes')
        .join('users', 'jokes.user_id', 'users.id')
        .select('jokes.id', 'jokes.question' , 'jokes.answer', 'users.username as created_by');

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
    let loadJokes = db('jokes')
        .where({
            public: true,
          })
        .join('users', 'jokes.user_id', 'users.id')
        .select('jokes.id', 'jokes.question' , 'jokes.answer', 'users.username as created_by'); 

    return loadJokes.then(jokes => {
        return jokes.map(joke => helper.convertBoolean(joke));
      });  
}

async function add(joke) {
const [id] = await db('jokes').insert(joke);

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