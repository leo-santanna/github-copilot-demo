import {CalculationHelper} from '../../src/helpers/calculationHelper';

describe('CalculationHelper', () => {
    let calculationHelper: CalculationHelper;

    beforeEach(() => {
        calculationHelper = new CalculationHelper();
    });

    describe('sum', () => {
        it('should return the sum of two numbers', () => {
            expect(calculationHelper.sum(1, 2)).toBe(3);
        });

        it('should return the sum of two negative numbers', () => {
            expect(calculationHelper.sum(-1, -2)).toBe(-3);
        });

        it('should return the sum of a positive and a negative number', () => {
            expect(calculationHelper.sum(1, -2)).toBe(-1);
        });
    });

    describe('subtract', () => {
        it('should return the difference of two numbers', () => {
            expect(calculationHelper.subtract(1, 2)).toBe(-1);
        });

        it('should return the difference of two negative numbers', () => {
            expect(calculationHelper.subtract(-1, -2)).toBe(1);
        });

        it('should return the difference of a positive and a negative number', () => {
            expect(calculationHelper.subtract(1, -2)).toBe(3);
        });
    });
});