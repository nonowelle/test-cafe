<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import Hero from '../components/Hero.vue';
</script>

<template>
  <main>
    <Hero />
    <TheWelcome />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  gap: 6rem;
}
</style>
