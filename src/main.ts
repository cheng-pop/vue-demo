import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Cheng from './components/Cheng.vue'
import Cheng1 from './components/Cheng1.vue'


const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        { path: '/' , component: Cheng },
        { path: '/xxx' , component: Cheng1}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
