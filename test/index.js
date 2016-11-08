/* globals describe,it */

const assert = require('assert');
const closest = require('../index.js');

describe('default ratios', function() {
	it('should return [16,9]', function() {
		assert.equal(closest([500,1])[0], 16);
		assert.equal(closest([500,1])[1], 9);
	});

	it('should return [16,9]', function() {
		assert.equal(closest([16,9])[0], 16);
		assert.equal(closest([16,9])[1], 9);
	});

	it('should return [1,1]', function() {
		assert.equal(closest([16,16])[0], 1);
		assert.equal(closest([16,16])[1], 1);
		assert.equal(closest([2,2])[0], 1);
		assert.equal(closest([2,2])[1], 1);
	});
});

describe('supplied ratios', function() {
    it('should return [1,1]', function() {
		assert.equal(closest([500,1],[[1,1]])[0], 1);
		assert.equal(closest([500,1],[[1,1]])[1], 1);
	});
});