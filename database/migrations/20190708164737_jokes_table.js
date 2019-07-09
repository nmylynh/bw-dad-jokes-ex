exports.up = function(knex, Promise) {
    return knex.schema.createTable('jokes',
      table => {
        table.increments();

        table
            .string('question')
            .notNullable()
            .unique()
        table
            .string('answer')
            .notNullable()
            .unique()
        table
            .boolean('public')
            .notNullable
            .defaultTo(true)  
        table
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');  
      })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('jokes')
};