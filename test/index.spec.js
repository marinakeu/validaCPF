const assert = require('chai').assert;
const cpfValidator = require('../index');

describe('cpfValidator()', () => {

    it('Deveria retornar true para a letra a', () => {
        assert.equal(cpfValidator('a'), true);
    });

    it('Deveria retornar false para a letra b', () => {
        assert.equal(cpfValidator('b'), false);
    });

});