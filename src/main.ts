import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/index.less";
// 按需引入后部分样式会丢失 需手动导入
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import useHttp from "@/config/http.config";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

useHttp();

const app = createApp(App).use(pinia).use(router);
app.mount("#app");
