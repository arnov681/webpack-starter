const HtmlWebpackPlugin = require('html-webpack-plugin');

modulo.exports = {

    mode: 'development',
    module: {
        rules: [{
            test: /\.html$/i,
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