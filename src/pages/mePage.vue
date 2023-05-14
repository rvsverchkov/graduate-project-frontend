<template>
    <div class="me__container">
        <p class="me__title">Привет, {{ userName }}!</p>
        <img class="me__image" :src=getUserAvatar() alt="">
        <p>{{ userAbout }}</p>
        <p>{{ userId }}</p>
        <p>{{ userEmail }}</p>
        <RouterLink to="/courses" class="me__button">Выбрать курс</RouterLink>
    </div>
</template>

<script>
import axios from 'axios'
import authHeader from '@/services/auth-header'
import { RouterLink } from 'vue-router';

export default {
    name: "mePage",
    data() {
        return {
            userName: "",
            userAvatar: "",
            userAbout: "",
            userId: "",
            userEmail: ""
        };
    },
    methods: {
        getUserAvatar() {
            return this.userAvatar;
        }
    },
    mounted() {
        axios.get("http://localhost:3000/users/me", { headers: authHeader() })
            .then(response => {
            this.userName = response.data.name;
            this.userAbout = response.data.about;
            this.userAvatar = response.data.avatar;
            this.userId = response.data._id;
            this.userEmail = response.data.email;
        });
    },
    components: { RouterLink }
}
</script>