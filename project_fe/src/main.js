import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import {
    // create naive ui
    create,
    // component
    NButton
  } from 'naive-ui'
  
  const naive = create({
    components: [NButton]
  })
  
  const app = createApp()
  app.use(naive)
// Import Bootstrap JavaScript
// Use Swiper modules
createApp(App).use(router).mount('#app')

