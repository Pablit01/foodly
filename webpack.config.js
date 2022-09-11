const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, './assets/dist'),
        filename: 'bundle.js'
    },

    devServer: {
        static: path.resolve(__dirname, 'assets'),
        devMiddleware: {
            publicPath: '/dist/'
        }
      },

    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
          },
          
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },

          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader'
              },
            ],
          }
          
        ]
      }
}