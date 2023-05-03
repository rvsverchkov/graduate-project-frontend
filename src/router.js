import { createRouter, createWebHistory } from "vue-router";
import startPage from './pages/startPage.vue';
import signInPage from './pages/signInPage.vue';
import signUpPage from './pages/signUpPage.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Start',
            path: '/', 
            component: startPage 
        },
        {
            name: 'SignIn',
            path: '/signin', 
            component: signInPage 
        },
        { 
            name: 'SignUp',
            path: '/signup', 
            component: signUpPage 
        },
    ] 
})