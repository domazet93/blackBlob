var webpack = require("webpack"),
    path = require("path");


function resolve(dir) {
    return path.join("../../../", dir);
}

let Config = require(path.join(resolve(""), "./config"));

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
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ "es2015" ]
                    }
                }                
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
                test: /\.(jpg|png|svg|ico)$/,
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
        }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            },          
            "config": JSON.stringify(new Config())
        })
    ],
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.common.js",
            "@": path.resolve(__dirname, "js"),
            "images": path.resolve(__dirname, "images")
        }
    },
    watch: true
};
