const db = require('../database/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    filter
}

function find() {
    return db('jokes');
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