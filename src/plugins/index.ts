import useElementUI from "./element-plus";
import { App } from "vue";

export default function usePlugins(app: App) {
  useElementUI(app);
}
