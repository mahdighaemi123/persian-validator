const pattern = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm

module.exports.validateIp = function (ip) {
    if (ip === undefined) return false

    const validattionResult = pattern.test(ip)
    return validattionResult
}
