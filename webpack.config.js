const {resolve} = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = {
   entry: resolve(__dirname, 'src', 'main.js'),
   output: {
      path: resolve(__dirname, 'build'),
      filename: 'main.bundle.js',
      // filename: 'main.[contenthash]bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
         },
         {
            // test: /\.(png|jpg|jpeg)/,
            test: /\.mp3$/,
            use: 'file-loader',
         }
      ],     
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: resolve(__dirname, 'index.html'), 
      }),
      new MiniCssExtractPlugin({
         filename: '[name].css',
         // filename: '[name].[contenthash].css',
      }),
      // new BundleAnalyzerPlugin()
   ]
}

