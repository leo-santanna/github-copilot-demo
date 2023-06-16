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

    describe('multiply', () => {
        it('should return the product of two numbers', () => {
            expect(calculationHelper.multiply(1, 2)).toBe(2);
        });

        it('should return the product of two negative numbers', () => {
            expect(calculationHelper.multiply(-1, -2)).toBe(2);
        });

        it('should return the product of a positive and a negative number', () => {
            expect(calculationHelper.multiply(1, -2)).toBe(-2);
        });
    });

    describe('divide', () => {
        it('should return the quotient of two numbers', () => {
            expect(calculationHelper.divide(1, 2)).toBe(0.5);
        });

        it('should return the quotient of two negative numbers', () => {
            expect(calculationHelper.divide(-1, -2)).toBe(0.5);
        });

        it('should return the quotient of a positive and a negative number', () => {
            expect(calculationHelper.divide(1, -2)).toBe(-0.5);
        });
    });

    describe('isNumberEven', () => {
        it('should return true if the number is even', () => {
            expect(calculationHelper.isNumberEven(2)).toBe(true);
        });

        it('should return false if the number is odd', () => {
            expect(calculationHelper.isNumberEven(1)).toBe(false);
        });
    });

    describe('checkIfStringHasNumber', () => {
        it('should return true if the string contains a number', () => {
            expect(calculationHelper.checkIfStringHasNumber('abc123')).toBe(true);
        });

        it('should return false if the string does not contain a number', () => {
            expect(calculationHelper.checkIfStringHasNumber('abc')).toBe(false);
        });
    });
});