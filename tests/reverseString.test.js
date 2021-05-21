const reverseString = require('../code/reverseString')

test('reverse string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
})

test('reverse capital string', () => {
    expect(reverseString('CAPITAL STRING')).toBe('GNIRTS LATIPAC')
})