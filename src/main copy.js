// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import ContactView from './components/ContactView.vue'
import ServicesView from './components/ServicesView.vue'
//import { createVuetify } from 'vuetify'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Define your routes here
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/service', component: ServicesView},
    { path: '/contact', component: ContactView }
  ],
})

const app = createApp(App)
app.use(router)
app.use(BootstrapVue)
app.mount('#app')
