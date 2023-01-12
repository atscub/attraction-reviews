class Review {
    constructor(attractionId, score) {       // Accept name and age in the constructor
        this.attractionId = attractionId || null;
        this.score = score || null;
    }

    getAttractionId() {
        return this.attractionId;
    };

    setAttractionId(attractionId) {
        this.attractionId = attractionId;
    };

    getScore() {
        return this.score;
    };

    setScore(score) {
        this.score = score;
    };
}

module.exports = Review;