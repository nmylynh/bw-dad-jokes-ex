const express = require('express');
const jokesDB = require('../models/jokes-model')
const router = express.Router();
const { restricted } = require('../middleware/auth-mw.js');
const { checkPublic, validateBody, validateId } = require('../middleware/jokes-mw')


router.get('/', checkPublic, restricted, async (req, res) => {
    try {
        const jokes = await jokesDB.find();

        res.status(200).json(jokes);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});


router.get('/:id', restricted, validateId, async (req, res) => {
    try {
        const {id} = req.params;
        const joke = await jokesDB.findById(id);

        res.status(200).json(joke);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
}); 

router.post('/', restricted, validateBody, async (req, res) => {
    try {
        const newJoke = await jokesDB.add(req.body);

        res.status(201).json(newJoke);
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.put('/:id', restricted, validateId, validateBody, async (req, res) => {
    try {
        const {id} = req.params;
        const updateJoke = await jokesDB.update(id, req.body);

        updateJoke
        ? res.status(200).json({ message: 'successfully updated joke' })
        : res.status(404).json({ message: 'joke not found'})
    } catch(err) {
        res.status(500).json({success: false, err});
    }
});

router.delete('/:id', restricted, validateId, async (req, res) => {
    try {
        const {id} = req.params;
        const success = await jokesDB.remove(id);

        success ?
         res.status(204).end() : res.status(404).end();
    }  catch(err) {
         res.status(500).json({success: false, err});
    }
});



module.exports = router;