const pattern = /(\+?98|098|0|0098)?(9\d{9})/

module.exports.validateIranPhone = function (phone) {
    phone = `${phone}`
    const validateResult = pattern.test(phone)
    return validateResult
}
