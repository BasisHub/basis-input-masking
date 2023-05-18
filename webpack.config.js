const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    'basis-input-masking': './src/index.js',
    'basis-input-masking.min': './src/index.js',
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: ['Basis', 'InputMasking'],
    libraryTarget: 'umd',
  },
  externals: {
    'bbj-masks/src/StringMask': {
      commonjs: 'bbj-masks/src/StringMask',
      commonjs2: 'bbj-masks/src/StringMask',
      amd: 'bbj-masks/src/StringMask',
      root: ['BBj', 'Masks', 'StringMask'],
    },
    'bbj-masks/src/NumberMask': {
      commonjs: 'bbj-masks/src/NumberMask',
      commonjs2: 'bbj-masks/src/NumberMask',
      amd: 'bbj-masks/src/NumberMask',
      root: ['BBj', 'Masks', 'NumberMask'],
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                debug: false,
                targets: {
                  browsers: ['last 2 versions', 'ie >= 11'],
                },
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-proposal-decorators',
              {
                legacy: true,
              },
            ],
            [
              '@babel/plugin-proposal-class-properties',
              {
                loose: true,
              },
            ],
            '@babel/plugin-proposal-object-rest-spread',
            [
              'transform-imports',
              {
                'core-decorators': {
                  transform: 'core-decorators/src/${member}',
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: function() {
                return window.document.head
              },
            },
          },
          'css-loader',
          'sass-loader',
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     parser: 'postcss-scss',
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/,
    }),
    new CopyPlugin([
      {
        from: './node_modules/bbj-masks/dist/bbj-masks.min.js',
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
}
