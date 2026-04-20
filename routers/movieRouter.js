const express = require('express');
const router = express.Router();
const { index, show} = require('../controllers/moviesController');


// Index
router.get('/', index);


// Show
router.get('/:id', show);


module.exports = router;