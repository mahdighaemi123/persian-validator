module.exports.validateString = function (string) {
    if (string === undefined) return false

    const validateResult = typeof (string) == "string"
    return validateResult
}

module.exports.validateMinLength = function (string, minLength) {
    if (string === undefined) return false

    string = String(string)
    const validateResult = minLength < string.length
    return validateResult
}

module.exports.validateMaxLength = function (string, maxLength) {
    if (string === undefined) return true

    string = String(string)
    const validateResult = string.length < maxLength
    return validateResult
}

module.exports.validateMinOrEqualLength = function (string, minLength) {
    if (string === undefined) return false

    string = String(string)
    const validateResult = module.exports.validateMinLength(string, minLength) || string.length == minLength
    return validateResult
}

module.exports.validateMaxOrEqualLength = function (string, maxLength) {
    if (string === undefined) return true

    string = String(string)
    const validateResult = module.exports.validateMaxLength(string, maxLength) || string.length == maxLength
    return validateResult
}

module.exports.validateStartsWith = function (string, start) {
    if (string === undefined) return false

    string = String(string)
    const validateResult = string.startsWith(start)
    return validateResult
}

module.exports.validateEndsWith = function (string, end) {
    if (string === undefined) return false

    string = String(string)
    const validateResult = string.endsWith(end)
    return validateResult
}
