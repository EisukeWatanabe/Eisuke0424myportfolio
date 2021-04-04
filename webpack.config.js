const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const globImporter = require('node-sass-glob-importer')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { Z_FIXED } = require('zlib');

module.exports = (env, argv) => {
  const PRODUCTION = argv.mode === 'production'

  return {
    entry: './src/js/index.js',
    output: {
      filename: PRODUCTION
        ? 'assets/javascripts/bundle[hash].js'
        : 'assets/javascripts/bundle.js',
      path: path.join(__dirname, 'docs'),
    },
    plugins: [
      new CleanWebpackPlugin([
        'docs/assets/stylesheets',
        'docs/assets/javascripts',
      ]),
      new MiniCssExtractPlugin({
        filename: PRODUCTION
          ? 'assets/stylesheets/bundle[hash].css'
          : 'assets/stylesheets/bundle.css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/html/index.html',
      }),
    ],
    resolve: {
      extensions: [
        '.js',
      ],
    },
    devtool: PRODUCTION ? 'none' : 'source-map',
    optimization: {
      minimizer: PRODUCTION
        ? [
            new UglifyJSPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true,
                },
              },
            }),
          ]
        : [],
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  require('cssnano')({
                    preset: 'default',
                  }),
                  require('autoprefixer')({
                    grid: true
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                importer: globImporter(),
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', { modules: false }]],
              },
            },
          ],
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            fix: true,
          }
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'docs'),
      port: 8080,
    },
  }
}
