<template>
    <div class="header">
        <RouterLink to="/" class="header__title">RVStudy</RouterLink>
        <div class="header__button-container" v-if="this.showSignUpButton && !this.isLoggedIn">
            <RouterLink to="/signup" class="header__link">Регистрация</RouterLink>
        </div>
        <div class="header__button-container" v-if="this.showSignInButton && !this.isLoggedIn">
            <RouterLink to="/signin" class="header__link">Авторизация</RouterLink>
        </div>
        <div class="header__button-container" v-if="this.isLoggedIn && !this.showLogOutButton">
            <RouterLink to="/users/me" class="header__link">Личный кабинет</RouterLink>
        </div>
        <div class="header__button-container" v-if="this.showLogOutButton">
            <p @click="logOut()" class="header__link">Выйти из аккаунта</p>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "RvsHeader",
    props: {
        showSignUpButton: Boolean,
        showSignInButton: Boolean,
        isLoggedIn: Boolean,
        showLogOutButton: Boolean
    },
    components: { RouterLink },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/');
        }
    }
}
</script>