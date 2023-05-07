import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import './assets/app.sass'
import 'normalize.css'

router.beforeEach((to) => {
    if (to.meta.needAuth && !store.state.auth.status.loggedIn) {
        return { name: 'SignIn' }
    }
})

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
