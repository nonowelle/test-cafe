<script setup lang="ts">
import About from '../components/About.vue'
import Hero from '../components/Hero.vue';
</script>

<template>
  <main>
    <Hero />
    <About />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}
</style>
