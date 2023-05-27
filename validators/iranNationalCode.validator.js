const { verifyIranianNationalId } = require('@persian-tools/persian-tools');

module.exports.validatenNtionalCode =  function (nationalCode) {
    if (nationalCode === undefined) return false

    const validattionResult = verifyIranianNationalId(nationalCode)
    return validattionResult
}
