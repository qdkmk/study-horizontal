const path = require('path');

module.exports = {
  mode: 'development',
  entry:[
    './src/js/app.js'
   ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader",  // compiles Sass to CSS, using Node Sass by default        
        ]
      }
    ]
  }
};