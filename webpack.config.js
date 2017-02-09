var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js' ,
    path: path.resolve(__dirname, 'dist')
  },
  // assumes all JavaScript files you edit will be in src/
  // when importing from src/<file>.js, only need to specify as <file>
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.json', '.jsx', '.css']
  },

  devtool: 'source-map', // source maps to ease debugging

  module: {
    rules: [
      // JS & JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.jsx$/,
        loaders: [
          'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015', // invokes Babel to translate React and ES6
        ]
      },


      // SASS Files
      //
      {
        test: /\.scss$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]',
          'sass-loader?sourceMap'
        ],
        exclude: /node_modules|lib/

        /*
        test: /\.scss$/,
        //Moves code into css file to link from index.html instead of putting it into a style tag (can't cache that shit)
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
        */
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/style.css',
      allChunks: true
    })
  ]

};

