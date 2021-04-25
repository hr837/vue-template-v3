import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import { App } from "vue";

export default function useElementUI(app: App) {
  app.use(ElementPlus);
}
