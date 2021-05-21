function capitalizeString(lowercaseStr) {
    return lowercaseStr[0].toUpperCase() + lowercaseStr.slice(1)
}

module.exports = capitalizeString;