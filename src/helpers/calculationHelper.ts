export class CalculationHelper {
    sum(a: number, b: number): number {
        return a + b;
    }
    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        return a / b;
    }

    isNumberEven(a: number): boolean {
        return a % 2 === 0;
    }

    checkIfStringHasNumber(input: string): boolean {
        return /\d/.test(input);
    }
}