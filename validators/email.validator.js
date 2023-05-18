const validator = require("email-validator");
 
module.exports.validateEmail = function (email){
    const validationResult = validator.validate(`${email}`);
    return validationResult
}