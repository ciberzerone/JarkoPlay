import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import piniaPersist from 'pinia-plugin-persist'

// Crea la aplicación
const app = createApp(App);

// Crea una instancia de Pinia
const pinia = createPinia();

// Usa Pinia y el plugin de persistencia
pinia.use(piniaPersist);

// Usa Pinia y el router en la aplicación
app.use(pinia);
app.use(router);

// Monta la aplicación
app.mount('#app');
