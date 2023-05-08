<template>
  <div class="signin__container">
    <p class="signin__title">Авторизация</p>
    <Form class="form" @submit="handleLogin" :validation-schema="schema">
      <div v-if="!successful">
        <div class="form__input-container">
          <Field name="email" type="email" class="form__input" placeholder="Email" />
          <ErrorMessage name="email" class="form__input-error" />
        </div>
        <div class="form__input-container">
          <Field name="password" type="password" class="form__input" placeholder="Пароль" />
          <ErrorMessage name="password" class="form__input-error" />
        </div>
        <div class="form__button-container">
          <button class="form__button" :disabled="loading">
            <span v-show="loading" class="spinner-border spinner-border-sm"></span>
            Войти
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
  name: 'signInPage',
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
        .max(40, "Максимум 50 символов")
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
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          console.log('Токен записан в localStorage')
          console.log(localStorage)
          this.$router.push("/courses")
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
}
</script>