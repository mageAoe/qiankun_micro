import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'



const render = (props: QiankunProps = {}) => {
    createApp(App).mount('#micro-app-demo3')
 }
  
  


const initData = (props : QiankunProps = {}) => {

}



const initMicro = () => {
    console.log('------initMicro------');
    
    renderWithQiankun({
      bootstrap() {},
      mount(props) {
        render(props)
      },
      unmount() {

      },
      update() {
        initData()
      },
    })
  }
  

qiankunWindow.__POWERED_BY_QIANKUN__ ? initMicro() : render()