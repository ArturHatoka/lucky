import {registerPlugins} from '@/plugins'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import {createApp} from 'vue'

const head = createHead()
const app = createApp(App)

registerPlugins(app)

app.use(head)
app.mount('#app')
