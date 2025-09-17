<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';
import Hero from './components/Hero.vue';
</script>

<template>
  <header>
    <Nav />
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

#app {
  display: flex;
  flex-direction: column;

}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;

  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }


}
</style>
