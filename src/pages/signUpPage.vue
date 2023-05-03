<template>
    <div class="signup__container">
        <p class="signup__title">Регистрация</p>
        <form action="submit" class="form">
            
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'signUpPage',
    methods: {
        onClick() {
            axios.post('http://localhost:3000/signup', {
                    "email": "rvsverchkdsdov32@gmail.com",
                    "password": "1375447",
                    "name": "Roman2"
            })
                .then(response => {
                    console.log(response.data);
                })
        }
    }
}
</script>