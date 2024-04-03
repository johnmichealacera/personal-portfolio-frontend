<template>
  <nav-bar-component />
  <router-view />
  <footer-component />
</template>

<script>
import router from './router';
import NavBarComponent from './components/NavBar.vue';
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  router,
  components: {
    NavBarComponent,
    FooterComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
