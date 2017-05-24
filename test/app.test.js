var expect = require('chai').expect;
var request = require('request');

describe('test main server file', function() {
  var url = 'http://localhost:4567/addOne/5';

  // done
  it('test server add adds one', function(done) {
    request(url, function(err, res, body) {
      console.log('body ->', body);
      // {answer: '51'}
      // Can you get this test to pass?
      expect(JSON.parse(body).answer).to.equal(6);
      done();
    });
  });

  it('should return status code 200', function(done) {
    request(url, function(err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    })
  });
});
