import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'


const render = (props: QiankunProps = {}) => {
  ReactDOM.createRoot(document.getElementById('micro-app-demo1')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
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
