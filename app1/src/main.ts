import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// app1 > src > main.ts
import {
  renderWithQiankun,
  qiankunWindow,
  type QiankunProps,
} from 'vite-plugin-qiankun/dist/helper'

function render(props: QiankunProps = {}) {
  const { container } = props
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  if (container) {
    app.mount(container.querySelector('#app') as HTMLElement)
  } else {
    app.mount('#app')
  }
}

function initApp() {
  console.log('qiankunWindow', qiankunWindow)
  if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log('%c 独立渲染', 'color: red; font-size: 20px;')
    render()
    return
  }
  renderWithQiankun({
    mount(props) {
      console.log('%c qiankun 渲染', 'color: red; font-size: 20px;')
      console.log(props)
      render(props)
    },
    bootstrap() {
      console.log('bootstrap')
    },
    unmount(props) {
      console.log('unmount', props)
    },
    update(props) {
      console.log('update', props)
    },
  })
}

initApp()
