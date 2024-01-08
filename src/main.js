import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome

createApp(App).use(router).use(createPinia()).mount('#app')
