import { createRouter, createWebHashHistory } from "vue-router";
import authorizationPage from './components/authorizationPage.vue';
import initialPage from './components/initialPage.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/authorization', component: authorizationPage },
        { path: '/', component: initialPage },
    ] 
})