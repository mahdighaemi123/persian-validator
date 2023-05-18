const { isShebaValid } = require('@persian-tools/persian-tools');

module.exports.validateShaba =  function (shaba) {
    const validattionResult = isShebaValid(shaba)
    return validattionResult
}