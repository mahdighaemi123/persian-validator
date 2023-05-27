const { verifyCardNumber } = require('@persian-tools/persian-tools');

module.exports.validateIranBankCard =  function (bankCard) {
    if (bankCard === undefined) return false

    const validattionResult = verifyCardNumber(bankCard)
    return validattionResult
}
