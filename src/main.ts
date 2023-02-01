import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// style
import "./assets/styles/index.less";
import "@/config/element-plus.config";
// store
import store from "@/store";
// http request 
import useHttp from "@/config/http.config";
useHttp();

// app instance
const app = createApp(App).use(store).use(router);
app.mount("#app");
