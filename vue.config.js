const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
        dts: "typings/auto-imports.d.ts",
      }),
      Components({
        dts: "typings/components.d.ts",
        resolvers: [
          ElementPlusResolver(),
          (componentName) => {
            if (componentName.startsWith("IconPark"))
              return {
                name: componentName,
                from: "@icon-park/vue-next/es/all",
              };
          },
        ],
      }),
    ],
  },
  css: {
    sourceMap: process.env.NODE_ENV !== "production",
  },
});
