module.exports.validateArray = function (array) {
    const validateResult = Array.isArray(array)
    return validateResult
}

module.exports.validateMinArrayLength = function (array, minLength) {
    if (array === undefined) return false
    const validateResult = minLength < array.length
    return validateResult
}

module.exports.validateMaxArrayLength = function (array, maxLength) {
    if (array === undefined) return true
    const validateResult = array.length < maxLength
    return validateResult
}

fmodule.exports.validateMinOrEqualArrayLength = function (array, minLength) {
    if (array === undefined) return false

    const validateResult = module.exports.validateMin(array, minLength) || array.length == minLength
    return validateResult
}

module.exports.validateMaxOrEqualArrayLength = function (array, maxLength) {
    if (array === undefined) return true

    const validateResult = module.exports.validateMax(array, maxLength) || array.length == maxLength
    return validateResult
}

