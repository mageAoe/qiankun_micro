import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import "~/style/index.scss";
import "element-plus/theme-chalk/src/message.scss";

const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.use(ElementPlus)
app.use(router)
app.mount('#app')
