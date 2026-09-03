import { createRouter, createWebHistory } from 'vue-router'

//Does your typical routing, currently only have the one page in the chamber
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: () => import('@/Pages/Landing/Landing.vue') },
        { path: '/Blog', component: () => import('@/Pages/Blog/Blog.vue') },
    ],
});

export default router;