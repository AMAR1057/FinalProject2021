<script setup>
import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav />
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(22, 22, 18);
}
</style>
