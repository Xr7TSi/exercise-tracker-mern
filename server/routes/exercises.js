const express = require("express");
const router = express.Router();

const  Exercise = require('../models/exercise.model');

// this is the http://localhost:5000/exercises route
router.get('/', (req, res) => {
    Exercise.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// this is the http://localhost:5000/exercises/add route
router.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;