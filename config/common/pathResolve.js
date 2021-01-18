const path = require("path")
const rootpath = path.resolve(__dirname, "../..")

module.exports.resolveFromRoot = function (pathsrc) {
    return path.resolve(rootpath, pathsrc)
}