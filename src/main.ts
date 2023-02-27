import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// style
import '@/config/style.config'
// store
import store from '@/store'
// http request
import httpRequest from '@/config/http.config'

// app instance
const appInstance = createApp(App)
  .use(store)
  .use(router)
  .use(httpRequest)
// await router resolved then mount app
router.isReady().then(() => appInstance.mount('#app'))
