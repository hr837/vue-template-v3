import { createApp } from "vue";
import App from "./App.vue";
import usePlugins from "./plugins";
import useRouter from "./router";
import { useVuex } from "./store";
import { boot } from "./bootstrap/boot";
import useLibs from "./libs";
import "./styles/index.less";

// 更改系统标题
document.title = import.meta.env.VITE_APP_NAME;

// 创建Vue实例
const app = createApp(App);
usePlugins(app);
useRouter(app);
useVuex(app);
useLibs(app);
// 挂载根组件到app节点
app.mount("#app");

boot();
