import useElementUI from "./element-plus.plugin";
import { App } from "vue";

export default function usePlugins(app: App) {
  useElementUI(app);
}
