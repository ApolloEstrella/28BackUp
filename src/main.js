// main.js
import { createApp } from 'vue'
import App from './App.vue'
//import Vuetify from 'vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import ContactView from './components/ContactView.vue'
import ServicesView from './components/ServicesView.vue'

import vuetify from "./plugins/vuetify";

import store from './store';

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
app.use(vuetify)
app.use(store);
app.mount("#app") 





 