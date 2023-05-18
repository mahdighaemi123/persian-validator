const { verifyCardNumber } = require('@persian-tools/persian-tools');

module.exports.validateIranBankCard =  function (bankCard) {
    const validattionResult = verifyCardNumber(bankCard)
    return validattionResult
}
