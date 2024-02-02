import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome

const pinia = createPinia();

pinia.use(({ store }) => {
  if (store.$id === 'storeAuth') {
    store.initializeAuthListener();
  }
});

createApp(App).use(router).use(pinia).mount('#app'); // Use the 'pinia' instance here