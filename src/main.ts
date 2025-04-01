import { createApp } from 'vue'
import './style.css'
import './assets/styles/tailwind.css';
import App from './App.vue'
import router from './router';


const app = createApp(App);
app.use(router); // Use Vue Router
app.mount('#app');