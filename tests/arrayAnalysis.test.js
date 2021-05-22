const arrayAnalysis = require('../code/arrayAnalysis')

test('Analyze Array', () => {
    expect(arrayAnalysis([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    })
})

test('round average .toFixed(2)', () => {
    expect(arrayAnalysis([3, 5, 7, 13, 22, 21, 43])).toEqual({
        average: 16.29,
        min: 3,
        max: 43,
        length: 7,
    })
})