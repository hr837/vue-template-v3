import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// style
import '@/config/style.config'
// store
import store from '@/store'
// http request
import httpRequest from '@/config/http.config'

// 初始化APP
createApp(App)
  .use(store)
  .use(router)
  .use(httpRequest)
  .mount('#app')
