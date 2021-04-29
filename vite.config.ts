import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import viteSvgIcons from "vite-plugin-svg-icons";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		styleImport({
			libs: [
				{
					libraryName: "element-plus",
					esModule: true,
					ensureStyleFile: true,
					resolveStyle: (name) => {
						return `element-plus/lib/theme-chalk/${name}.css`;
					},
					resolveComponent: (name) => {
						return `element-plus/lib/${name}`;
					},
				},
			],
		}),
		viteSvgIcons({
			// Specify the icon folder to be cached
			iconDirs: [path.resolve(__dirname, "src/assets/svg")],
			// Specify symbolId format
			symbolId: "icon-[dir]-[name]",
		}),
	],
	define: {
		appConfig: "appConfig",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
