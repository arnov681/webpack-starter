const HtmlWebpackPlugin = require

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
    }
}