import { createApp } from "vue";
import App from "./App.vue";
import usePlugins from "./plugins";
import useRouter from "./router";
import "./styles/index.css";

// 更改系统标题
import { sysName } from "./config/app.config";
document.title = sysName;

// 创建Vue实例
const app = createApp(App);
// 使用第三方库
usePlugins(app);
// 使用路由
useRouter(app);
app.mount("#app");
