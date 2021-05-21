const capitalizeString = require('../code/capitalizeString');

test('Capitalizes lowercase string', () => {
    expect(capitalizeString('lowercase string')).toBe('LOWERCASE STRING');
});

test('Capitalize mixed string', () => {
    expect(capitalizeString('mIxeD stRinG')).toBe('MIXED STRING');
});