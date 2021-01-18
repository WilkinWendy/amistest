const { isProduction } = require('../env');
module.exports.getMode = function () {
    if (isProduction()) {
        return "production"
    } else {
        return "development"
    }
}