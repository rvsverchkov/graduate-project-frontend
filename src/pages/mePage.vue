<template>
    <div class="me__container">
        <p class="me__title">Привет, {{ userData.name }}!</p>
        <p>{{ userData.about }}</p>
        <p>{{ userData.avatar }}</p>
        <p>{{ userData._id }}</p>
        <p>{{ userData.email }}</p>
    </div>
</template>

<script>
import axios from 'axios'
import authHeader from '@/services/auth-header'

export default {
    name: 'mePage',
    data() {
        return {
            userData: new Object()
        }
    },
    methods: {
        consolelg() {
            console.log(this.userData)
        }
    },
    mounted() {
        axios.get('https://rvsverchkov-backend.ru/users/me', { headers: authHeader() })
            .then(response => {
                this.userData.name = response.data.name;
                this.userData.about = response.data.about;
                this.userData.avatar = response.data.avatar;
                this.userData._id = response.data._id;
                this.userData.email = response.data.email;
            })
    }
}
</script>