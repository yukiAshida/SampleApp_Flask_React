module.exports = {

  entry: './src/index.js', 
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },

  mode: 'production', // production or 'development',
  watch: true,
  watchOptions: {
  	ignored: ['/node_modules/']
  },

  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude:/node_modules/, 
        use:{
          loader:'babel-loader', 
          options:{
            presets:['@babel/preset-env', '@babel/preset-react'], 
            plugins:['@babel/plugin-syntax-jsx']
          }
        } 
      },

      {
        test: /\.(sass|scss|css)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {url: false}
          },
          'sass-loader'
        ],
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', ".sass"]
  }
  
};