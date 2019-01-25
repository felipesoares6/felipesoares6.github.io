const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },

	entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },

      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },

      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'public/images',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),

    new MiniCSSExtractPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),

    new CopyWebpackPlugin([{
      from: './public',
      to: 'public',
    }]),
  ],
};

