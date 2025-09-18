<script setup lang="ts">

import BoxItem from '@/components/BoxItem.vue';
import TextBanner from '../components/TextBanner.vue';
import { textContent } from '@/content/textContent';

const boxItems = textContent.boxItems;

</script>

<template>
  <main>
    <TextBanner />
    <hr>
    <BoxItem v-for="(box, index) in boxItems" :key="index" :box="box" />
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
