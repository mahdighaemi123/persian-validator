const pattern = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i

module.exports.validateMongoDbId = function (id) {
    const validattionResult = pattern.test(id)
    return validattionResult
}
