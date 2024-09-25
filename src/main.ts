import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';


import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App);

app.mount('#app');

// Initialize AOS
AOS.init();