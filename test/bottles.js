const assert = require('chai').assert,
  getTotalBottles = require('../lib/app.js');

it('should return the correct value', () => {
  assert.isTrue(getTotalBottles(10) === 15);
});

it('should return the correct value (retest)', () => {
  assert.isTrue(getTotalBottles(20) === 35);
});

it('should return the correct value (retest)', () => {
  assert.isTrue(getTotalBottles(30) === 55);
});

it('should return the correct value (retest)', () => {
  assert.isTrue(getTotalBottles(40) === 75);
});
