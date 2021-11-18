const currentTask = process.env.npm_lifecycle_event;
const path = require("path");

const config = {
    entry: {
        main: path.resolve(__dirname, 'src/scripts/main.js')
    },
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, 'src'),
    },
    
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, 'src'),
        hot: true,
        port: 3000,
        host: '0.0.0.0'
    },

    mode: "development",

    // loaders
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer"
                                    ]
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    }

    // plugins
}

if(currentTask == "build") {
    config.output = {
        filename: "bundled.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
    config.mode = "production"
}

module.exports = config;