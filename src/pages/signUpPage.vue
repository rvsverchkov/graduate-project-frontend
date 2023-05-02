<template>
    <div class="signup__container">
        <p class="form__title">РЕГИСТРАЦИЯ</p>
        <form action="submit">
            <input type="text">
            <input type="text">
            <input type="text">
            <p>HELLO</p>
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