const validator = require("email-validator");

module.exports.validateEmail = function (email) {
    if (email === undefined) return false

    const validationResult = validator.validate(`${email}`);
    return validationResult
}