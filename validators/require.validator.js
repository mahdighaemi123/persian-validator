module.exports.validateRequire = function (value) {
    if (value === undefined) return false

    console.log(value)

    const validattionResult = value != null
    return validattionResult
}