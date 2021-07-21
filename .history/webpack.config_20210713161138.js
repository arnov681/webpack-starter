const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    oup
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