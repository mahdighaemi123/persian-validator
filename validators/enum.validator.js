module.exports.validateEnums = function (input_value, expected) {
    const validattionResult = expected.includes(input_value)
    return validattionResult
}
