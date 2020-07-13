const path = require('path');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  pages: {
    app: {
      entry: 'src/app/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'app'],
    },
  },
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      extensions: ['.js', '.vue', '.json'],
      modules: [
        resolve('src'),
        resolve('node_modules'),
      ],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        '@': resolve('src'),
        publicLibsDir: resolve('src/libs'),
        publicAssetsDir: resolve('assets'),
        publicStylesDir: resolve('src/libs/assets/styles'),
        publicImagesDir: resolve('src/libs/assets/images'),
        publicComponentsDir: resolve('src/libs/assets/components'),

        appStylesDir: resolve('src/app/assets/styles'),
        appImagesDir: resolve('src/app/assets/images'),
        appComponentsDir: resolve('src/app/components'),
        appFiltersDir: resolve('src/app/filters'),
        appMixinsDir: resolve('src/app/mixins'),
        appRoutesDir: resolve('src/app/routes'),
        appStoreDir: resolve('src/app/store'),
        appUtilsDir: resolve('src/app/utils'),
        appViewsDir: resolve('src/app/views'),
        appWebServiceDir: resolve('src/app/webService'),
      },
    };
  },
};
