var expect = require('chai').expect;
var addOne = require('../src/modules/addOne');

describe('testing add one module', function() {
  it('should add one to the number passed in', function() {
    // var ourNumber = 8;
    // var ourNumberPlusOne = addOne(ourNumber);
    expect(addOne(8)).to.equal(9);
  });

  it('should return a number type', function() {
    expect(addOne(8)).to.be.a('number');
  });
});
