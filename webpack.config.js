const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin();

  return {
    mode: isProduction ? 'production' : 'development',

    entry: './src/app.js',

    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-class-properties', '@babel/plugin-transform-spread'],
            },
          },
        },
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },

    plugins: [CSSExtract],

    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',

    devServer: {
      static: path.join(__dirname, 'public'),
      historyApiFallback: true,
    },
  };
};
