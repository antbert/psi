var expect = require('chai').expect;
var s = require('../app/service/helloService');

describe('Hello world bdd with mocha and chai', function() {
  it('Expected that it should be fub', function() {
    expect('Fun').to.equal('Fun');
    expect(s(1, 2)).to.equal(3);
  });
});
