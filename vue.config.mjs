import { defineConfig } from "@vue/cli-service";
import PluginAutoImport from "unplugin-auto-import/webpack";
import PluginComponents from "unplugin-vue-components/webpack";
import IconsResolver from "unplugin-icons/resolver";
import PluginIconify from "unplugin-icons/webpack";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      PluginAutoImport({
        resolvers: [ElementPlusResolver()],
        dts: "typings/auto-imports.d.ts",
      }),
      PluginComponents({
        dts: "typings/components.d.ts",
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: "icon",
            enabledCollections: ["icon-park-outline"],
            customCollections: ["icon-local"],
            alias: {
              "park-outline": "icon-park-outline",
              local: "icon-local",
            },
          }),
        ],
      }),
      PluginIconify({
        autoInstall: true,
        customCollections: {
          "icon-local": FileSystemIconLoader("./src/assets/icons"),
        },
        iconCustomizer(collection, icon, props) {
          const iconClass = `iconify ${collection} ${collection}-${icon}`;
          props.class = iconClass;
          if (collection === "icon-local") {
            props.width = "1.2em";
            props.height = "1.2em";
          }
        },
      }),
    ],
  },
  css: {
    sourceMap: process.env.NODE_ENV !== "production",
    loaderOptions: {
      less: {
        lessOptions: {
          globalVars: {
            'color-primary': '#e30120'
          }
        }
      }
    }
  },
});
