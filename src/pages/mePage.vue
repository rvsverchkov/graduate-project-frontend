<template>
    <div class="me__container">
        <p class="me__title">Доброго времени суток, {{ userName }}!</p>
        <div class="me__info-container">
            <img class="me__image" :src=getUserAvatar() alt="">
            <div class="me__text-container">
                <p class="me__text" v-if="(courseOffice.userValue === 0) && (courseEmail.userValue === 0) && (coursePhishing.userValue === 0)">Вы еще не прошли ни одного курса, чтобы разблокировать результаты 
                    перейдите на страницу курсов и пройдите тот, что вам будет интересен</p>
                <p class="me__text" v-if="(courseOffice.userValue !== 0) || (courseEmail.userValue !== 0) || (coursePhishing.userValue !== 0)">У вас отлично получается, не останавливайтесь на достигнутом!</p>
                <RouterLink to="/courses" class="me__button">Выбрать курс</RouterLink>
            </div>
        </div>
        <div class="courses__elements">
            <div class="courses__element" :class="[courseOffice.userValue === 0 ? 'courses__element-hide': true]">
                <div class="courses__link">
                    <p class="courses__element-title">Как вести себя в офисе</p>
                    <div class="courses__element-timebox">
                        <img class="courses__element-svg" src="../assets/img/time.svg">
                        <p class="courses__element-time">25 минут</p>
                    </div>
                    <div v-if="courseOffice.userValue !== 0" class="courses__result">
                        <p>{{ courseOffice.userValue }}/{{ courseOffice.resultValue }}</p>
                        <div class="courses__result-bar">
                            <div class="courses__result-value" :style="{'width': `${courseOffice.percent}`}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="courses__element" :class="[courseEmail.userValue === 0 ? 'courses__element-hide': true]">
                <div class="courses__link">
                    <p class="courses__element-title">Все, что нужно знать о корпоративной почте</p>
                    <div class="courses__element-timebox">
                        <img class="courses__element-svg" src="../assets/img/time.svg">
                        <p class="courses__element-time">30 минут</p>
                    </div>
                    <div v-if="courseEmail.userValue !== 0" class="courses__result">
                        <p>{{ courseEmail.userValue }}/{{ courseEmail.resultValue }}</p>
                        <div class="courses__result-bar">
                            <div class="courses__result-value" :style="{'width': `${courseEmail.percent}`}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="courses__element" :class="[coursePhishing.userValue === 0 ? 'courses__element-hide': true]">
                <div class="courses__link">
                    <p class="courses__element-title">Как не стать жертвой фишинга</p>
                    <div class="courses__element-timebox">
                        <img class="courses__element-svg" src="../assets/img/time.svg">
                        <p class="courses__element-time">45 минут</p>
                    </div>
                    <div v-if="courseOffice.userValue !== 0" class="courses__result">
                        <p>{{ coursePhishing.userValue }}/{{ coursePhishing.resultValue }}</p>
                        <div class="courses__result-bar">
                            <div class="courses__result-value" :style="{'width': `${coursePhishing.percent}`}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import authHeader from '@/services/auth-header';
import { RouterLink } from 'vue-router';

export default {
    name: "mePage",
    data() {
        return {
            userName: "",
            userAvatar: "",
            userAbout: "",
            userId: "",
            userEmail: "",
            courseOffice: new Object(),
            courseEmail: new Object(),
            coursePhishing: new Object()
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
                let percent;
                this.userName = response.data.name;
                this.userAbout = response.data.about;
                this.userAvatar = response.data.avatar;
                this.userId = response.data._id;
                this.userEmail = response.data.email;
                percent = ((response.data.courses.office.userValue) / (response.data.courses.office.resultValue));
                this.courseOffice.percent = `${(percent * 100)}%`;
                this.courseOffice.userValue = response.data.courses.office.userValue;
                this.courseOffice.resultValue = response.data.courses.office.resultValue;
                percent = ((response.data.courses.email.userValue) / (response.data.courses.email.resultValue));
                this.courseEmail.percent = `${(percent * 100)}%`;
                this.courseEmail.userValue = response.data.courses.email.userValue;
                this.courseEmail.resultValue = response.data.courses.email.resultValue;
                percent = ((response.data.courses.phishing.userValue) / (response.data.courses.phishing.resultValue));
                this.coursePhishing.percent = `${(percent * 100)}%`;
                this.coursePhishing.userValue = response.data.courses.phishing.userValue;
                this.coursePhishing.resultValue = response.data.courses.phishing.resultValue;
        });
    },
    components: { RouterLink }
}
</script>