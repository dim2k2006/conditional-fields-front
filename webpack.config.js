const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const outputFile = '[name].js';
const libraryName = 'conditional-fields';

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public'),
};

module.exports = {
    entry: {
        [`${libraryName}.bundle`]: `${PATHS.source}/index.js`,
        [`${libraryName}.browser`]: `${PATHS.source}/index.browser.js`,
        [`${libraryName}.demo`]: `${PATHS.source}/index.demo.js`
    },

    output: {
        path: PATHS.build,
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: '/'
    },

    mode: NODE_ENV === 'development' ? 'development' : 'production',

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.NamedModulesPlugin(),
        new BundleAnalyzerPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                include: PATHS.source,
                loader: 'babel-loader',
                sideEffects: false
            }
        ]
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new UglifyJsPlugin({
            uglifyOptions: {
                sourceMap: false,
                beautify: false,
                comments: false,
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    sequences: true,
                    booleans: true,
                    loops: true,
                    unused: true,
                    warnings: false,
                    drop_console: true
                }
            }
        })
    );
}
