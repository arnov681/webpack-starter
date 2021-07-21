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
                use: [

                    {
                        loader: 'html-loader',
                        options: { minimize: false }

                    }
                ]

            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ]
}