/* eslint-disable @typescript-eslint/ban-ts-comment */
const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // @ts-ignore
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      // @ts-ignore
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
