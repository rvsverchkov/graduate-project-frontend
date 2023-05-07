<template>
    <div class="signup__container">
        <p class="signup__title">Регистрация</p>
        <Form class="form" @submit="handleRegister" :validation-schema="schema">
            <div v-if="!successful">
                <div class="form__input-container">
                    <Field name="email" type="email" class="form__input" placeholder="Email"/>
                    <ErrorMessage name="email" class="form__input-error" />
                </div>
                <div class="form__input-container">
                    <Field name="password" type="password" class="form__input" placeholder="Пароль" />
                    <ErrorMessage name="password" class="form__input-error" />
                </div>
                <div class="form__input-container">
                    <Field name="name" type="text" class="form__input" placeholder="Имя" />
                    <ErrorMessage name="name" class="form__input-error" />
                </div>
                <div class="form__button-container">
                    <button class="form__button" :disabled="loading">
                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                        Зарегистрироваться
                    </button>
                </div>
            </div>
        </Form>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    name: 'signUpPage',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const schema = yup.object().shape({
            email: yup
                .string()
                .required("Отсутствует email")
                .email("Email некорректен")
                .max(50, "Максимум 50 символов"),
            password: yup
                .string()
                .required("Отсутствует пароль")
                .min(6, "Минимально 6 символов")
                .max(40, "Максимум 50 символов"),
            name: yup
                .string()
                .required("Отсутствует имя")
                .min(3, "Минимум 3 символа")
                .max(20, "Максимум 20 символов")
        });
        return {
            successful: false,
            loading: false,
            message: "",
            schema,
        };
    },
    Computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    methods: {
        handleRegister(user) {
            this.message = "";
            this.successful = false;
            this.loading = true;

            this.$store.dispatch("auth/register", user).then(
                (data) => {
                    this.message = data.message;
                    this.successful = true;
                    this.loading = false;
                },
                (error) => {
                    this.message =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.successful = false;
                    this.loading = false;
                }
            );
        },
    },
}
</script>