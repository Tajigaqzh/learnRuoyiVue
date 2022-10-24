import { createApp } from 'vue'
import App from './App.vue'
import Cookies from 'js-cookie'

import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import '@/assets/styles/index.scss' // global css
import store from './store'
import router from "./router";
const app = createApp(App)
app.use(store)
app.use(router)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
    locale: locale,
    // 支持 large、default、small
    size: Cookies.get('size') || 'default'
})

app.mount('#app')
