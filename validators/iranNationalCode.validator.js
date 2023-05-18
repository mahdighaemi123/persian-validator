const { verifyIranianNationalId } = require('@persian-tools/persian-tools');

module.exports.validatenNtionalCode =  function (nationalCode) {
    const validattionResult = verifyIranianNationalId(nationalCode)
    return validattionResult
}
