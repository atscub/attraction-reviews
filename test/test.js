var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;

let server = require('../app');
chai.use(chaiHttp);

describe('/attractions/search?score=N', function() {
	it('it should GET all attractions with a review score higher than or equal to 7', (done) => {
        chai.request(server)
            .get('/attractions/search?score=7')
            .end((err, res) => {
                  res.should.have.status(200);
                  attractions = res.body;

                  attractions.should.be.a('array');
                  attractions.length.should.be.eql(1);

                  for (attraction of attractions) {
                  	attraction.average_review_score.should.gte(7)
                  }
              done();
            });
     });

    it('it should GET all attractions with a review score higher than or equal to 10', (done) => {
        chai.request(server)
            .get('/attractions/search?score=7')
            .end((err, res) => {
                  res.should.have.status(200);
                  attractions = res.body;

                  attractions.should.be.a('array');
                  attractions.length.should.be.eql(1);

                  for (attraction of attractions) {
                    attraction.average_review_score.should.gte(10)
                  }
              done();
            });
     });
	
	it('it should GET all attractions with a review score higher than 1', (done) => {
        chai.request(server)
            .get('/attractions/search?score=1')
            .end((err, res) => {
                  res.should.have.status(200);
                  attractions = res.body;

                  attractions.should.be.a('array');
                  attractions.length.should.be.eql(5);

                  for (attraction of attractions) {
                  	attraction.average_review_score.should.gte(1)
                  }
              done();
            });
    });
    
    
    it('it should GET no attractions when the requested review score higher than 10', (done) => {
        chai.request(server)
            .get('/attractions/search?score=12')
            .end((err, res) => {
                  attractions = res.body;

                  attractions.should.be.a('array');
                  attractions.length.should.be.eql(0);
              done();
            });
    });

    it('it should GET no attractions when the requested review score lower than 1', (done) => {
        chai.request(server)
            .get('/attractions/search?score=-3')
            .end((err, res) => {
                  attractions = res.body;

                  attractions.should.be.a('array');
                  attractions.length.should.be.eql(0);
              done();
            });
    });

    it('it should GET no attractions when the requested review score is 0', (done) => {
        chai.request(server)
            .get('/attractions/search?score=0')
            .end((err, res) => {
                  attractions = res.body;

                  attractions.should.be.a('array');
                  attractions.length.should.be.eql(0);
              done();
            });
    });

    it('it should return 400 on non numerical requested review score', (done) => {
        chai.request(server)
            .get('/attractions/search?score=abc')
            .end((err, res) => {
                  attractions = res.body;
                  res.should.have.status(400);

                  attractions.should.be.a('array');
                  attractions.length.should.be.eql(0);
              done();
            });
    });


    it('it should return 400 on empty requested review score input', (done) => {
        chai.request(server)
            .get('/attractions/search?score=')
            .end((err, res) => {
                  attractions = res.body;
                  res.should.have.status(400);

                  attractions.should.be.a('array');
                  attractions.length.should.be.eql(0);
              done();
            });
     });
});


