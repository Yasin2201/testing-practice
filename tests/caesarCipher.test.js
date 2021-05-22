const encrypt = require('../code/caesarCipher')

test('test shift', () => {
    expect(encrypt('caesar', 3)).toBe('fdhvdu')
})

test('test wrapping z-a', () => {
    expect(encrypt('does it wrap xyz', 7)).toBe('kvlz pa dyhw efg')
})

test('test letter case', () => {
    expect(encrypt('I Am Mixed Case', 10)).toBe('S Kw Wshon Mkco')
})

test('test punctuation is ignored', () => {
    expect(encrypt('I\'m using punction! ...I think?', 5)).toBe('N\'r zxnsl uzshyzfynts! ...I ymnsp?')
})