module.exports.validateNumber = function (number) {
    const validateResult = typeof (number) == "number"
    return validateResult
}


module.exports.validateMin = function (number, min) {
    number = Number(number)
    const validateResult = min < number
    return validateResult
}
module.exports.validateMax = function (number, max) {
    number = Number(number)
    const validateResult = number < max
    return validateResult
}


module.exports.validateMinOrEqual = function (number, min) {
    number = Number(number)
    const validateResult = module.exports.validateMin(number, min) || number == min
    return validateResult
}

module.exports.validateMaxOrEqual = function (number, max) {
    number = Number(number)
    const validateResult = module.exports.validateMax(number, max) || number == max
    return validateResult
}