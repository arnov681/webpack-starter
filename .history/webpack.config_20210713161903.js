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

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi webpack app',
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}