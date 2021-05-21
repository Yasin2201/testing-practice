const calculator = require('../code/calculator')

test('test addition', () => {
    expect(calculator.add(2, 3)).toBe(5)
})

test('test subtraction', () => {
    expect(calculator.sub(10, 7)).toBe(3)
})

test('test division', () => {
    expect(calculator.divide(200, 10)).toBe(20)
})

test('test multiplication', () => {
    expect(calculator.multiply(12, 3)).toBe(36)
})