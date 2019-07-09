const db = require('../database/dbConfig.js');
const helper = require('./helpers/joke-helper');

module.exports = {
    get,
    findById,
    update,
    remove,
    getUserJokes
}

function findById(id) {
    return db('users')
    .where({ id })
    .first()
}
  
function update(id, changes) {
    return db('users')
    .where({ id })
    .update(changes, '*')
}

function remove(id) {
    return db('users')
    .where({ id })
    .del();
}

function get(id) {
    let users = db('users');
  
    if (id) {
      users.where({ id }).first();
  
      const promises = [users, this.getUserJokes(id)]; 
  
      return Promise.all(promises).then(results => {
        let [user, jokes] = results;

        if (user) {
            user.jokes = jokes;
        
            return user
          } else {
            return null;
          }
        });
    }

    return users
}

function getUserJokes(id) {
    let loadJokes = db('jokes')
        .where('user_id', id) 

    return loadJokes.then(jokes => {
        return jokes.map(joke => helper.convertBoolean(joke));
      });  
  }
  