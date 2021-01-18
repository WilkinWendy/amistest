const { isProduction } = require('../env');
module.exports.getSplitChunksConfig = function () {
    if (isProduction()) {
        return {
            runtimeChunk: {
                name: 'runtime'
            },
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    venders: {
                        test: /[\\/]node_modules[\\/]/,
                        filename: 'venders.js',
                        priority: 3,
                        enforce: true,
                        reuseExistingChunk: false
                    }
                }
            }
        }
    } else {
        return {

        }
    }
}