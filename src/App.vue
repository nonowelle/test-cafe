<script setup lang="ts">
import { RouterView } from 'vue-router';

import Nav from './components/Nav.vue';

</script>

<template>
  <header>
    <Nav />
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {

  z-index: 1000;
  background: var(--color-background, #fff);
  width: 100%;
  height: 0;
  line-height: 1.5;
  margin-bottom: 0;
  position: relative;
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
