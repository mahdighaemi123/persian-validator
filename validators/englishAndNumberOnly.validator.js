const pattern = /^[0-9a-zA-Z_.-]+$/

module.exports.validateEnglishAndNumberOnly = function (username) {
    if (username === undefined) return true

    const validattionResult = pattern.test(username)
    return validattionResult
}