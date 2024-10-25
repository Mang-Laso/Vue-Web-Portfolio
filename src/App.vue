<template>
  <div id="app">
    <router-view />
    <FooterPage v-if="$route.name !== 'Login'" /> <!-- Conditionally render the footer -->
  </div>
</template>

<script>
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    FooterPage,
  },
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #FAF9F6;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #110f0f;
}

footer {
  margin-top: auto;
}
</style>
