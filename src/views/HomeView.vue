<script setup lang="ts">

import BoxItem from '@/components/BoxItem.vue';
import TextBanner from '../components/TextBanner.vue';
import ScrollButton from '@/components/ScrollButton.vue';
import { ref } from 'vue';

import { textContent } from '@/content/textContent';

const boxItems = textContent.boxItems;
const textBanners = textContent.banners;

const sectionRefs = ref([]);

</script>

<template>
  <main>

    <TextBanner v-for="(banner, index) in textBanners" :key="index" :textBanner="banner"
      :id="banner.title.toLowerCase().replace('?', '')" />
    <BoxItem v-for="(box, index) in boxItems" :key="index" :box="box" :id="box.title.toLowerCase().replace(' ', '')" />
    <ScrollButton />





  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;

  flex-wrap: wrap;
}

.container {
  position: relative;

  width: 100%;
  display: flex;
  flex-wrap: wrap;
}



@media screen and (min-width: 785px) {
  main {
    flex-direction: row;
  }
}
</style>
