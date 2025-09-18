<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Nav from './components/Nav.vue';
import Hero from './components/Hero.vue';
</script>

<template>
  <header>
    <Nav />
    <hr>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {

  z-index: 1000;
  background: var(--color-background, #fff);
  width: 100%;
  height: 80px;
  line-height: 1.5;
  margin-bottom: 2rem;
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
