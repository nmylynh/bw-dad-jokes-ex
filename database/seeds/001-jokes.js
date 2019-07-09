
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('jokes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {
          id: 1, 
          question: 'What do you call a mac ‘n’ cheese that gets all up in your face?', 
          answer: 'Too close for comfort food!', 
          public: true
        },
        {
          id: 2, 
          question: 'What concert costs just 45 cents?', 
          answer: '50 Cent featuring Nickelback!', 
          public: true
        },
        {
          id: 3, 
          question: 'Why did the scarecrow win an award?', 
          answer: 'Because he was outstanding in his field!', 
          public: true
        },
        {
          id: 4, 
          question: 'What do sprinters eat before a race?', 
          answer: 'Nothing, they fast!', 
          public: false
        }
      ]);
    });
};
