const pattern = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i

module.exports.validateMongoDbId = function (id) {
    if (id === undefined) return false

    const validattionResult = pattern.test(id)
    return validattionResult
}
