module.exports.validateRequire = function (value) {
    if (value === undefined) return false

    const validattionResult = value != null
    return validattionResult
}