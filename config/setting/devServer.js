const { isProduction } = require('../env');
const { resolveFromRoot } = require("../common/pathResolve")
module.exports.getDevServerConfig = function () {
    return isProduction() ? {
        devServer: {
            contentBase: resolveFromRoot('dist'),
            compress: true,
            port: 9000,
            after: function (app, server, compiler) {
                console.log('after ')
                // do fancy stuff
            }
        }
    } : {}
}