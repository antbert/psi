var expect = require('chai').expect;

describe('Hello world bdd with mocha and chai', function() {
  it('Expected that it should be fub', function() {
    expect('Fun').to.equal('Fun');
  });
});
