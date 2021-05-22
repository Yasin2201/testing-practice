function arrayAnalysis(arr) {
    const findAverage = arr.reduce((a, b) => a + b) / arr.length

    //Round Average To 2dp
    const average = (findAverage) => {
        if (findAverage % 1 === 0) {
            return findAverage
        } else {
            return parseFloat(findAverage.toFixed(2))
        }
    }

    const analysisObject = {
        average: average(findAverage),
        min: arr.reduce((a, b) => Math.min(a, b)),
        max: max = arr.reduce((a, b) => Math.max(a, b)),
        length: arr.length
    }

    return analysisObject
}

module.exports = arrayAnalysis
