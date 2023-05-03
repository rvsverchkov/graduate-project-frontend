<template>
  <div class="app">
    <RvsHeader
      :showSignInButton="this.$route.meta.showSignInButton" :showSignUpButton="this.$route.meta.showSignUpButton"
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
