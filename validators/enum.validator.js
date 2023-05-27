module.exports.validateEnums = function (input_value, expected) {
    if (input_value === undefined) return false

    const validattionResult = expected.includes(input_value)
    return validattionResult
}
