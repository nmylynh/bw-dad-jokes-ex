module.exports = {
  development: {
      client: 'sqlite3',
      useNullAsDefault: true,
      connection: {
          filename: './database/jokes.db3',
          typeCast: function(field, next) {
            if (field.type == 'TINY' && field.length == 1) {
                return (field.string() == '1'); // 1 = true, 0 = false
            } 
            return next();
        }
      },
      pool: {
          afterCreate: (conn, done) => {
              conn.run('PRAGMA foreign_keys = ON', done);
          },
      },
      migrations: {
          directory: './database/migrations',
      },
      seeds: {
          directory: './database/seeds',
      },
  },
};