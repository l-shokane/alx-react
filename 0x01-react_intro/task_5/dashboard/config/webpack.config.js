const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'), // Output directory
  },
  devtool: 'inline-source-map', // Source map
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // CSS loader
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'image-webpack-loader', // Image loader
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: true,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // For Babel transpiling, if needed
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000,
    hot: true, // Hot reloading
  },
};
