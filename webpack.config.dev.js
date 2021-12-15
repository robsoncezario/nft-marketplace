const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: './build',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "asset/media/[path][name].[ext]",
					outputPath: url => url.replace('src/assets/images/', '')
        }
      },

			{
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
				{
					loader: 'file-loader',
					options: {
						name: 'asset/fonts/[path][name].[ext]',
						outputPath: url => url.replace('src/assets/fonts/', '')
					}
				}]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/public/index.html'),
			favicon: path.join(__dirname, '/public/favicon.ico')
    }),

		new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    })
  ],
};