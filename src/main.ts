import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

/*App create & mount */
const app = createApp(App)

app.use(router)

app.mount('#app')
