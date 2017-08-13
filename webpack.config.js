module.exports = {
  
  //specify the input
  entry: './public/app.jsx',
  
  //specify the output
  output: {
    //set two properties on the object
    path: __dirname,
    filename:  './public/bundle.js'
  },
  
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};