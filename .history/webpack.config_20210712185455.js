const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader'

            }]

        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: ':/src/index.html',
            filename: './index.html'
        }),
    ]
}