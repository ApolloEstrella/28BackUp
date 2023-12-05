// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/components/HomeView';
import AboutView from '@/components/AboutView.vue';
import ServicesView from '@/components/ServicesView.vue';
import ContactView from '@/components/ContactView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesView,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;