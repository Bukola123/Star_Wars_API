const { validationResult } = require('express-validator');
const movies = require('../models/movies');


exports.movieList = async function (req, res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    //let web = https://swapi.dev

    const {Name , Openingcrawl} = req.url;

    let Movies;
    Movies = new movies ({
        Name,
        Openingcrawl
    });

    try {
        await Movies.save();
        res.status(201).json({ Movies});
    }
    catch (err){
        res.status(500).json({ err });
    }

}