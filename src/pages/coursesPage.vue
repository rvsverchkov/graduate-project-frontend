<template>
    <div class="courses__container">
        <p class="courses__title">Курсы по основам информационной безопасности в компании</p>
        <div class="courses__elements">
            <div class="courses__element" v-for="item in this.data" :key="item.id">
                <RouterLink class="courses__link" to="/">
                    <p class="courses__element-title">{{item.title}}</p>
                    <div class="courses__element-timebox">
                        <img class="courses__element-svg" src="../assets/img/time.svg">
                        <p class="courses__element-time">{{item.time}}</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import json from '../assets/data/courses.json';
import { RouterLink } from 'vue-router';

export default {
    name: 'coursesPage',
    components: {
        RouterLink
    },
    data() {
        return {
            data: json
        }
    }
}
</script>