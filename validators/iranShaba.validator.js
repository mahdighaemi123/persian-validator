const { isShebaValid } = require('@persian-tools/persian-tools');

module.exports.validateShaba =  function (shaba) {
    if (shaba === undefined) return false

    const validattionResult = isShebaValid(shaba)
    return validattionResult
}