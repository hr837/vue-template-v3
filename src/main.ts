import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// style
import "@/config/style.config";
// store
import store from "@/store";
// http request 
import useHttp from "@/config/http.config";
useHttp();

// app instance
const app = createApp(App).use(store).use(router);
app.mount("#app");
