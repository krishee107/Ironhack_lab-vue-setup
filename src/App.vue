<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/helloworld">Hello world (bonus)</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav a{
  color: red;
  padding: 10px;
}
</style>
