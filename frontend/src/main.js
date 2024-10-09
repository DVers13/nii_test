import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import AddNote from './components/AddNote.vue'
import CurrentNote from './components/CurrentNote.vue'
import HomePage from './components/HomePage.vue'

const routes = [
    { path: '/', redirect: '/notes' },
    { path: '/notes', name: 'home', component: HomePage },
    { path: '/notes/:id', name: 'current', component: CurrentNote },
    { path: '/notes/add', name: 'add', component: AddNote },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(createPinia()).use(router).mount('#app')
