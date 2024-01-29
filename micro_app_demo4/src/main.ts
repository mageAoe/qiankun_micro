import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'

const render = (props: QiankunProps = {}) => {
    const app =  createApp(App)
    app.use(router)
    app.mount('#micro-app-demo4')
  }
  
const initMicro = () => {
    console.log('----------micro-app-demo4-------------');
    
  renderWithQiankun({
    bootstrap() {},
    mount(props) {
      render(props)
    },
    unmount() {},
    update() {},
  })
}
  

qiankunWindow.__POWERED_BY_QIANKUN__ ? initMicro() : render()
  