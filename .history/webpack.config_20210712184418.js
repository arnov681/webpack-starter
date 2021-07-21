const HtmlWebpackPlugin = require('html-webpack-plugin');

modulo.exports = {

    mode: 'development',
    module: {
        rules: [{
            test: /\.html$/i,
            use: [{
                loader: 'html-loader',
                options: {
                    attributes: false
                }
            }]

        }]
    },
    plugins: [
        new HtmlWebpackPlugin({})
    ]
}