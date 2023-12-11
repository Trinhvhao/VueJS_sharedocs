import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name:'Home',
            component: Home
        },
        {
            path:'/about',
            name:'About',
            component:()=> import('../views/About.vue')
        },
        {
            path:'/upload',
            name:'Upload',
            component:()=> import('../views/Upload.vue')
        },
        {
            path:'/login',
            name:'Login',
            component:()=> import('../views/Login.vue')
        }
        ,
        {
            path:'/landingpage',
            name:'LandingPage',
            component:()=> import('../views/LandingPage.vue')
        },
        {
            path:'/contact',
            name:'Contact',
            component:()=> import('../views/Contact.vue')
        },
        {
            path:'/community',
            name:'Community',
            component:()=>import('../views/Community.vue')
        }

    ]
})
export default router