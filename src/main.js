import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import router from "./router";
// import store from "./router";
import 'element-ui/lib/theme-chalk/index.css'


const app = createApp(App)
app.use(ElementUI).use(router)
app.mount('#app')
