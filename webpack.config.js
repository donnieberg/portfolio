var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: { filename: 'bundle.js' },
  // assumes all JavaScript files you edit will be in src/
  // when importing from src/<file>.js, only need to specify as <file>
  resolve: {
    root: path.resolve('./src'), // must be absolute path
    extensions: ['', '.js']
  },
  devtool: 'source-map', // source maps to ease debugging

  module: {
    loaders: [
      // JS & JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader', // auto-refreshes browser
          'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015', // invokes Babel to translate React and ES6
        ]
      },
      {
        test: /\.jsx$/,
        loaders: [
          'react-hot-loader', // auto-refreshes browser
          'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015', // invokes Babel to translate React and ES6
        ]
      },


      // SASS Files
      {
        test: /\.scss$/,
        //Applies loaders left to right style-loader, css-loader, sass-loader
        //Moves code into css file to link from index.html instead of putting it into a style tag (can't cache that shit)
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]

};
