const express = require('express');
const router = express.Router();
const { index, show, storeReview } = require('../controllers/moviesController');



// Index
router.get('/', index);


// Show
router.get('/:id', show);


// Store
router.post('/:id/reviews', storeReview);


module.exports = router;