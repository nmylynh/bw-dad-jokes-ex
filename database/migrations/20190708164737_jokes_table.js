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
            .defaultTo(true);
      })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('jokes')
};