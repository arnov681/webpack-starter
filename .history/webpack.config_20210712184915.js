const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

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
        new HtmlWebpackPlugin({
            template: ':/src/index.html',
            filename: './index.html'
        }),
    ]
}