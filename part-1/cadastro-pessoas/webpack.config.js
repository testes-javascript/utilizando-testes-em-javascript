const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        filename: 'app.bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [['es2015',{modules: false}]]
                }
            }
        ]
    }
}