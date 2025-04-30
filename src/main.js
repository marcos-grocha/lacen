import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VLibras from '@vue-a11y/vlibras'

createApp(App)
  .use(router)
  .use(VLibras)
  .mount('#app')
