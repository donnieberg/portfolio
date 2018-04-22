var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack');


module.exports = {
	mode: 'development',
  entry: [
		'./src/main.js',
		'react-hot-loader/patch'
	],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },

	devServer: {
		contentBase: './dist',
		hot: true
	},

  module: {
    rules: [
			// JS & JSX Files
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			// SASS Files
			{
				test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          //'postcss-loader',
          'sass-loader',
        ],
        exclude: /node_modules|lib/
      }
		]
	},

	resolve: {
		extensions: ['*', '.js', '.jsx']
	},

  plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
		new webpack.HotModuleReplacementPlugin()
	]

};

