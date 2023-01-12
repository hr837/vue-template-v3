import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/index.less";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import useHttp from "@/config/http.config";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

useHttp();

const app = createApp(App).use(pinia).use(router);
app.mount("#app");
