const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'development',
    oupt: {},
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