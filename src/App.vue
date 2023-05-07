<template>
  <div class="app">
    <RvsHeader
      :showSignInButton="this.$route.meta.showSignInButton" 
      :showSignUpButton="this.$route.meta.showSignUpButton" 
      :isLoggedIn="this.$store.state.auth.status.loggedIn"
      :showLogOutButton="this.$route.meta.showLogOutButton"
    ></RvsHeader>
    <router-view></router-view>
    <RvsFooter></RvsFooter>
  </div>
</template>

<script>
import RvsHeader from './components/RvsHeader.vue'
import RvsFooter from './components/RvsFooter.vue'

export default {
  name: 'App',
  components: {
    RvsHeader,
    RvsFooter
  },
}
</script>
