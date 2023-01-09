import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/index.less";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { installIconPark } from "@/config/iconpack.config";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App).use(pinia).use(router);
installIconPark(app);
app.mount("#app");
