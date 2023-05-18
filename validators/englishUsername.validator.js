const pattern = /^[0-9a-zA-Z_.-]+$/

module.exports.validateEnglishUsername = function (username) {
    const validattionResult = pattern.test(username)
    return validattionResult
}