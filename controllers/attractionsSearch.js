const Attraction = require('../models/attraction.js');
const Review = require('../models/review.js');

const attractions = [
  new Attraction(1, "Boat Tour around canals"),
  new Attraction(2, "Guided walk in city center"),
  new Attraction(3, "Musem entrance"),
  new Attraction(4, "National Park"),
  new Attraction(5, "Helicopter ride"),
  new Attraction(6, "Night Walk")
];

const reviews = [
  new Review(1, 1),
  new Review(1, 2),
  new Review(1, 2),
  new Review(1, 3),
  new Review(1, 7),
  new Review(1, 4),
  new Review(1, 3),
  new Review(1, 1),
  new Review(2, 9),
  new Review(2, 7),
  new Review(2, 8),
  new Review(4, 4),
  new Review(4, 5),
  new Review(4, 4),
  new Review(5, 3),
  new Review(5, 4),
  new Review(5, 2),
  new Review(5, 2),
  new Review(5, 4),
  new Review(5, 3),
  new Review(6, 6),
  new Review(6, 8),
  new Review(6, 7),
  new Review(6, 6),
  new Review(6, 6),
  new Review(6, 7)
];

exports.getAllAttractions =  () => {
  return attractions;
};

exports.getAllAttractionsReviews = () => {
  return reviews;
};


/* 
  Example output:

  [{
    name: "Boat Tour A",
    score: 5
  },{
    name: "Boat Tour B",
    score: 4
  }]
*/
exports.getAttractionsByReviewScore = (score) => {
  // TODO: Implement a method that gets all attractions with an average review score equal or higher than a certain score.
}
