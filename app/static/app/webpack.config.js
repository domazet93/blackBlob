var webpack = require("webpack"),
    path = require("path");

module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "bundle.js",
        publicPath: "/static/app/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["es2015"] }
                }]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [{
                    loader:"file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "images/"
                    }
                }]
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            Vue: "vue"
        })
    ],
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.js",
            "@": path.resolve(__dirname, "js"),
            "images": path.resolve(__dirname, "images")
        }
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 30,
        poll: 100
    }
};
