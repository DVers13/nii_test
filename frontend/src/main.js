import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import AddNote from './components/AddNote.vue'
import UpdateNote from './components/UpdateNote.vue'
import HomePage from './components/HomePage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/update/:id', name: 'update', component: UpdateNote },
    { path: '/add', component: AddNote },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(createPinia()).use(router).mount('#app')
