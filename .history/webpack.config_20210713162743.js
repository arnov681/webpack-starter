const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',

    output: {
        clean: true
    },

    module: {
        rules: [

            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    source: false
                }
            }
        ]
    },

    optimizations: {},

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi Webpack App',
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}