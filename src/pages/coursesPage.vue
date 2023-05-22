<template>
    <div class="courses__container">
        <p class="courses__title">Курсы по основам информационной безопасности в компании</p>
        <div class="courses__elements">
            <div class="courses__element">
                <div class="courses__link">
                    <p class="courses__element-title">Как вести себя в офисе</p>
                    <div class="courses__element-timebox">
                        <img class="courses__element-svg" src="../assets/img/time.svg">
                        <p class="courses__element-time">25 минут</p>
                    </div>
                    <RouterLink class="courses__button" to="/courses/office">Изучить</RouterLink>
                </div>
            </div>
            <div class="courses__element">
                <div class="courses__link">
                    <p class="courses__element-title">Все, что нужно знать о корпоративной почте</p>
                    <div class="courses__element-timebox">
                        <img class="courses__element-svg" src="../assets/img/time.svg">
                        <p class="courses__element-time">30 минут </p>
                    </div>
                    <RouterLink class="courses__button" to="/courses/email">Изучить</RouterLink>
                </div>
            </div>
            <div class="courses__element">
                <div class="courses__link">
                    <p class="courses__element-title">Как не стать жертвой фишинга</p>
                    <div class="courses__element-timebox">
                        <img class="courses__element-svg" src="../assets/img/time.svg">
                        <p class="courses__element-time">45 минут </p>
                    </div>
                    <RouterLink class="courses__button" to="/courses/phishing">Изучить</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'coursesPage',
    components: {
        RouterLink
    },
}
</script>