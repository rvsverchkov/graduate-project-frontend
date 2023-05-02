<template>
    <div class="header">
        <a href="/" class="header__title">RVStudy</a>
        <div class="header__button-container" v-if="this.isSignIn">
            <a href="#/signup" class="header__link" @click="this.checkRoute()">Регистрация</a>
        </div>
        <div class="header__button-container" v-if="this.isSingUp">
            <a href="/signin" class="header__link" @click="this.checkRoute()">Войти</a>
        </div>
        <div class="header__button-container" v-if="this.isAuth">
            <a href="/" class="header__link">Личный кабинет</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RvsHeader',
    props: {
        isSignIn: Boolean,
        isSingUp: Boolean,
        isAuth: Boolean,
        checkRoute: Function
    },
}
</script>