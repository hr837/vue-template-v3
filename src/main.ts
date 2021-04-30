import { createApp } from "vue";
import App from "./App.vue";
import usePlugins from "./plugins";
import useRouter from "./router";
import { useStore } from "./store";
import "./styles/index.less";

// 更改系统标题
document.title = import.meta.env.VITE_APP_NAME;

// 创建Vue实例
const app = createApp(App);
usePlugins(app);
useRouter(app);
useStore(app);
// 挂载根组件到app节点
app.mount("#app");
