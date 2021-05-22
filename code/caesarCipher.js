const encrypt = (str, shift) => {
    const strArray = str.split('')

    const shiftStrArray = strArray.map((letter) => {
        if (letter === letter.toUpperCase() && /[A-Za-z]/g.test(letter)) {
            return ((letter.charCodeAt(0) - 65 + shift) % 26) + 65
        } else if (letter === letter.toLowerCase() && /[A-Za-z]/g.test(letter)) {
            return ((letter.charCodeAt(0) - 97 + shift) % 26) + 97
        } else {
            return letter.charCodeAt(0)
        }
    })

    const strArrayEnc = shiftStrArray.map((char) => String.fromCharCode(char))

    return strArrayEnc.join('')
}

module.exports = encrypt