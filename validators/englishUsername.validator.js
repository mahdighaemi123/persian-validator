const pattern = /^[0-9a-zA-Z_.-]+$/

module.exports.validateEnglishUsername = function (username) {
    if (username === undefined) return false

    const validattionResult = pattern.test(username)
    return validattionResult
}