import { createApp } from "vue";
import App from "./App.vue";
import usePlugins from "./plugins";
import useRouter from "./router";
import "./styles/index.less";

// 更改系统标题
document.title = import.meta.env.VITE_APP_NAME;

// 创建Vue实例
const app = createApp(App);
// 使用第三方库
usePlugins(app);
// 使用路由
useRouter(app);
app.mount("#app");
