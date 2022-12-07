import TodoView from '@/views/Todo.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import TaskVue from '@/views/Task.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/todo',
            name: 'todo',
            component: TodoView,
        },
        {
            path: '/task',
            name: 'task',
            component: TaskVue,
        },
    ],
})

export default router
