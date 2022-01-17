const express = require('express');
const router = express.Router();

const {movieList} = require('../controllers/movieList')



router.get('/', movieList);



module.exports = router;