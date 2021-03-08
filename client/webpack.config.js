const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
        devServer: {
            port: 3000,
            historyApiFallback: true
        },
        mode: 'development',
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/public"),
            filename: "script.min.js?[hash]",
        },
        resolve: {
            alias: {
                Components: path.resolve(__dirname, 'src/components'),
                Actions: path.resolve(__dirname, 'src/redux/actions'),
                Constants: path.resolve(__dirname, 'src/redux/constants'),
                Reducers: path.resolve(__dirname, 'src/redux/reducers'),
                Services: path.resolve(__dirname, 'src/services'),
                Utils: path.resolve(__dirname, 'src/utils'),
            },
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        test: /node_modules/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        "css-loader", "sass-loader"
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g)$/i,
                    exclude: /node_modules/,
                    loaders: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 307200,
                                name: 'img/[name]-[hash:4].min.[ext]',
                                fallback: {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'img/[name]-[hash:4].min.[ext]'
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/i,
                    use: 'raw-loader'
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: 'style.min.css?[contenthash]',
            }),
            new CopyPlugin([
                {
                    from: './src/animation',
                    to: 'animation/[name].[ext]'
                },
                {
                    from: './src/favicons',
                    to: 'favicons/[name].[ext]',
                    cache: true
                },
            ])
        ]
};