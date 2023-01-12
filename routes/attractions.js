const express = require('express');
const router = express.Router();
const Controller = require('../controllers/attractionsSearch.js');

router.get('/search', (req, res, next) => {
  res.send(Controller.getAttractionsByReviewScore(req.query.score));
});

router.get('/all', function(req, res, next) {
  res.send(Controller.getAllAttractions());
});

router.get('/reviews', function(req, res, next) {
  res.send(Controller.getAllAttractionsReviews());
});


module.exports = router;
