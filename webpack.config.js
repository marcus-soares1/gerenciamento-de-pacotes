const path = require('path')

module.exports = {
    devServer:{
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        port: 8080
    },
    entry: {
      index: './src/index.js'
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /.js$/,
        use: ['babel-loader']
      }]
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname,"dist")
    }
}