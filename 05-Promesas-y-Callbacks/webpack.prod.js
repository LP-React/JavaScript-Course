const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    output: {
      clean: true,
      filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { sources: false }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /style.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']

            },
            { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              use: [
                  'babel-loader'
              ]
            },
        ]
    },

    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizer(),
        new Terser(),
      ]
    },

    plugins: [
        new HtmlWebPackPlugin({
          // filename: 'index.html'
          template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
          filename: '[name].[fullhash].css',
          ignoreOrder: false
        })
    ]
}
