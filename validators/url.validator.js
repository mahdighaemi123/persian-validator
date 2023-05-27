const pattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm

module.exports.validateURL = function (url) {
    if (url === undefined) return false

    const validattionResult = pattern.test(url)
    return validattionResult
}

