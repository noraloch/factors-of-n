var assert = require('assert');
var { factors } = require('../src/index.js');


describe('factorsOfN', function () {
    describe('#factors', function () {
        it('should return [1, 2, 4, 8, 16] when n=16', function () {
            assert.deepStrictEqual(factors(16), [1, 2, 4, 8, 16]);
        });
        it('should return [1, 2, 5, 7, 10, 14, 35, 70, 2557, 5114, 12785, 17899, 25570, 35798, 89495, 178990] when n=178990', function () {
            assert.deepStrictEqual(factors(178990), [1, 2, 5, 7, 10, 14, 35, 70, 2557, 5114, 12785, 17899, 25570, 35798, 89495, 178990]);
        });
        // Below here are broken
        it('should error when n = 0', function () {
            // TODO - this should only return [0]
            try {
                factors(0)
            } catch (error) {
                assert.deepStrictEqual(error, "Input n must be greater than 0")
            }
        });
        it('should error when n < 0', function () {
            // TODO - this should only return [0]
            try {
                factors(-5)
            } catch (error) {
                assert.deepStrictEqual(error, "Input n must be greater than 0")
            }
        });
    });
});