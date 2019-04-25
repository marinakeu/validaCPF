let chai = require('chai');
let expect = chai.expect;
let piece = require('../index');

describe('cpfValidator', () => {
    it('Deveria retornar true para CPF 111.444.777-35', () => {
        expect(piece.cpfValidator('11144477735')).to.equal(true);
    });
    it('Deveria retornar false para CPF 00', () => {
        expect(piece.cpfValidator('00')).to.equal(false);
    });
    it('Deveria retornar false para CPF 111.444.777-25', () => {
        expect(piece.cpfValidator('11144477725')).to.equal(false);
    });
    it('Deveria retornar false para CPF 111.444.777-34', () => {
        expect(piece.cpfValidator('11144477734')).to.equal(false);
    });
    it('Deveria retornar false para CPF 111.444.777-24', () => {
        expect(piece.cpfValidator('11144477724')).to.equal(false);
    });
    it('Deveria retornar false para CPF 111.111.111-11', () => {
        expect(piece.cpfValidator('11111111111')).to.equal(false);
    });
});
