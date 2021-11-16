const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/scripts/main.js')
    },
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, 'src'),
    },
    mode: "development",
    watch: true,

    // loaders
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }

    // plugins
}