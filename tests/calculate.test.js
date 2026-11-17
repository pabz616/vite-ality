import { describe, expect, test } from 'vitest'
import * as calculate from '../scripts/calculate.js'

describe('Basic Calculations', () => {
    test('Calculation integrity check', () => {
        expect(calculate.add(2, 3)).not.toBe(6);
        expect(calculate.add(-1, 1)).not.toBe(1);
        expect(calculate.add(0, 0)).not.toBe(null || undefined);
        expect(calculate.add(4,5)).not.toBe("9");
        expect(calculate.add(-10, 5)).not.toBeNaN();
    });

    test('Addition function adds two numbers correctly', () => {
        expect(calculate.add(2, 3)).toBe(5);
        expect(calculate.add(-1, 1)).toBe(0);
        expect(calculate.add(0, 0)).toBe(0);
        });

    test('Subtraction function subtracts two numbers correctly', () => {
        expect(calculate.subtract(5, 3)).toBe(2);
        expect(calculate.subtract(0, 5)).toBe(-5);
        expect(calculate.subtract(-5, -3)).toBe(-2);
    });

    test('Multiplication function multiplies two numbers correctly', () => {
        expect(calculate.multiply(2, 3)).toBe(6);
        expect(calculate.multiply(-1, 1)).toBe(-1);
        expect(calculate.multiply(0, 5)).toBe(0);
    });

    test('Division function divides two numbers correctly', () => {
        expect(calculate.divide(6, 3)).toBe(2);
        expect(calculate.divide(-6, 2)).toBe(-3);
        expect(() => calculate.divide(5, 0)).toThrow("Division by zero is not allowed.");
    });

    test('Square root function calculates the square root correctly', () => {
        expect(calculate.sqrt(9)).toBe(3);
        expect(calculate.sqrt(0)).toBe(0);
        expect(() => calculate.sqrt(-1)).toThrow("Square root of negative number is not allowed.");
    });
});