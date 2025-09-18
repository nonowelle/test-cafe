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
  flex-direction: column;
  gap: 2rem;
  flex-wrap: wrap;
}

@media screen and (min-width: 785px) {
  main {
    flex-direction: row;
  }
}
</style>
