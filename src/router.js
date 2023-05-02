import { createRouter, createWebHashHistory } from "vue-router";
import startPage from './pages/startPage.vue';
import signInPage from './pages/signInPage.vue';
import signUpPage from './pages/signUpPage.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: startPage },
        { path: '/signin', component: signInPage },
        { path: '/signup', component: signUpPage },
    ] 
})