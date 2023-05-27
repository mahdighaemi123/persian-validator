module.exports.validateBool = function (bool) {
    if (bool === undefined) return false

    const validateResult = typeof (bool) == "boolean"
    return validateResult
}