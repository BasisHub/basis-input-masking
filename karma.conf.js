// eslint-disable-next-line no-undef
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      // 'node_modules/bbj-masks/dist/bbj-masks.js',
      // 'dist/bbj-input-masking.js',
      // 'test/index.js'
      { pattern: 'test/*.test.js', watched: false },
      { pattern: 'test/**/*.test.js', watched: false },
    ],
    preprocessors: {
      // 'test/index': ['webpack', 'sourcemap'],
      'test/*.test.js': ['webpack', 'sourcemap'],
      'test/**/*.test.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
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
        ],
      },
    },
    reporters: ['mocha' , 'growl'],
    port: 9879, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome', 'FirefoxHeadless', 'Edge', 'IE'],
    autoWatch: false,
    concurrency: Infinity,
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless'],
      },
    },
  })
}
