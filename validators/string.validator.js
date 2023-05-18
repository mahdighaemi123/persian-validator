module.exports.validateString = function (string) {
    const validateResult = typeof (string) == "string"
    return validateResult
}

module.exports.validateMinLength = function (string, minLength) {
    string = String(string)
    const validateResult = minLength < string.length
    return validateResult
}

module.exports.validateMaxLength = function (string, maxLength) {
    string = String(string)
    const validateResult = string.length < maxLength
    return validateResult
}

module.exports.validateMinOrEqualLength = function (string, minLength) {
    string = String(string)
    const validateResult = module.exports.validateMinLength(string, minLength) || string.length == minLength
    return validateResult
}

module.exports.validateMaxOrEqualLength = function (string, maxLength) {
    string = String(string)
    const validateResult = module.exports.validateMaxLength(string, maxLength) || string.length == maxLength
    return validateResult
}

module.exports.validateStartsWith = function (string, start) {
    string = String(string)
    const validateResult = string.startsWith(start)
    return validateResult
}

module.exports.validateEndsWith = function (string, end) {
    string = String(string)
    const validateResult = string.endsWith(end)
    return validateResult
}
