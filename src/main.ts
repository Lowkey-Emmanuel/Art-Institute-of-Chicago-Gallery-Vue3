import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

/*App create & mount */
const app = createApp(App)

app.use(router)

app.mount('#app')
