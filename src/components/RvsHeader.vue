<template>
    <div class="header">
        <div>
            <RouterLink to="/" class="header__title">RVStudy</RouterLink>
        </div>
        <div class="header__button-container" v-if="this.showSignUpButton && !this.isLoggedIn">
            <RouterLink to="/signup" class="header__link">Регистрация</RouterLink>
        </div>
        <div class="header__button-container" v-if="this.showSignInButton && !this.isLoggedIn">
            <RouterLink to="/signin" class="header__link">Авторизация</RouterLink>
        </div>
        <div class="header__button-container" v-if="this.isLoggedIn && !this.showLogOutButton">
            <RouterLink to="/users/me" class="header__link">Личный кабинет</RouterLink>
        </div>
        <div class="header__button-container header__exit-container" v-if="this.showLogOutButton">
            <p @click="logOut()" class="header__exit">Выйти из аккаунта</p>
        </div>
        <div class="header__exit-container-mobile" v-if="this.showLogOutButton">
            <img src="../assets/img/exit.svg" @click="logOut()" class="header__exit-mobile"/>
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
            console.log('Вы вышли из аккаунта, токен удален');
            console.log(localStorage);
        }
    }
}
</script>