import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import 'bootstrap/dist/css/bootstrap.min.css'

console.log("テスト")

createApp(App).use(router).mount('#app')
