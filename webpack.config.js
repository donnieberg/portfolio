var path = require('path');

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
          presets: ['env', 'react']
        }
      },
      {
        test: /\.jsx$/,
        loaders: [
          'babel-loader?cacheDirectory&presets[]=react&presets[]=env', // invokes Babel to translate React and ES6
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
      }
    ]
  },

  plugins: [
		/*
    new ExtractTextPlugin({
      filename: 'dist/style.css',
      allChunks: true
    })
		*/
  ]

};

