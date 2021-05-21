const capitalizeString = require('../code/capitalizeString');

test('Capitalizes first letter(1)', () => {
    expect(capitalizeString('lowercase')).toBe('Lowercase');
});

test('apitalizes first letter(2)', () => {
    expect(capitalizeString('another One')).toBe('Another One');
});