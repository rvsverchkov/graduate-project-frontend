<template>
  <div class="app">
    <RvsHeader
      :isSignIn="this.isSignIn" :isSignUp="this.isSignUp" :isAuth="this.isAuth" :checkRoute="this.checkRoute"
    ></RvsHeader>
    <router-view></router-view>
    <RvsFooter></RvsFooter>
  </div>
</template>

<script>
import RvsHeader from './components/RvsHeader.vue'
import RvsFooter from './components/RvsFooter.vue'
import router from './router';
export default {
  name: 'App',
  components: {
    RvsHeader,
    RvsFooter
  },
  methods: {
    checkRoute() {
      let currentRoute = router.currentRoute._rawValue.path;
      console.log(router.currentRoute._rawValue.path)
      console.log(currentRoute)
      if (currentRoute === '/') {
        this.isSignIn = true;
        this.isSignUp = false;
        this.isAuth = false
      } else if (currentRoute === '/signin') {
        this.isSignIn = true;
        this.isSingUp = false;
        this.isAuth = false;
      } else if (currentRoute === '/signup') {
        this.isSignIn = false;
        this.isSingUp = true;
        this.isAuth = false;
      }
    }
  },
  data() {
    return {
      isSignIn: false,
      isSingUp: false,
      isAuth: false,
    }
  },
  mounted() {
    console.log('123');
    this.checkRoute();
  }
}
</script>
