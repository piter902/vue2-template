const { defineConfig } = require('@vue/cli-service');
const { vueConfig } = require('@piter/config');
const { name } = require('./package.json');
const env = process.env.NODE_ENV;
const proxy = {};
module.exports = defineConfig({
  publicPath: env === 'development' ? '/' : '/' + name,
  transpileDependencies: ['@piter.fe'],
  devServer: vueConfig.devServer,
  configureWebpack: (config) => {
    config.externals = vueConfig.getExternal;
  },
  chainWebpack: (configs) => {
    vueConfig.setPlugin(env, configs, proxy);
  }
});
