const jokesDB = require('../models/jokes-model');

module.exports = {
    checkPublic: async (req, res, next) => {
        try {
            const publicJokes = await jokesDB.filter();
            const token = req.headers.authorization;
    
            publicJokes && token
            ? next()
            : res.status(200).json(publicJokes);  
            
        } catch(err) {
            res.status(500).json({message: "Something went wrong."});
        }
    },
    validateId: async (req, res, next) => {
        try {
            const { id } = req.params;
            const jokeID = await jokesDB.findById(id);
    
            jokeID 
            ? next()
            : res.status(400).json({message: "invalid id"});  
            
        } catch(err) {
            res.status(404).json({message: "missing joke id"});
        }
    },
    validateBody: (req, res, next) => {
        const { question, answer } = req.body;
    
        question && answer
        ? next()
        : res.status(400).json({message: 'Missing required fields.'})
    }   
}
