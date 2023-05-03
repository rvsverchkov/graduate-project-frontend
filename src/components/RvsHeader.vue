<template>
    <div class="header">
        <RouterLink to="/" class="header__title">RVStudy</RouterLink>
        <div class="header__button-container" v-if="this.showSignUpButton">
            <RouterLink to="/signup" class="header__link">Регистрация</RouterLink>
        </div>
        <div class="header__button-container" v-if="this.showSignInButton">
            <RouterLink to="/signin" class="header__link">Войти</RouterLink>
        </div>
        <div class="header__button-container" v-if="this.isAuth">
            <RouterLink to="/" class="header__link">Личный кабинет</RouterLink>
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
        isAuth: Boolean,
        checkRoute: Function
    },
    components: { RouterLink }
}
</script>