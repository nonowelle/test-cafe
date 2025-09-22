<script setup lang="ts">

import BoxItem from '@/components/BoxItem.vue';
import TextBanner from '../components/TextBanner.vue';

import { textContent } from '@/content/textContent';

const boxItems = textContent.boxItems;
const textBanners = textContent.banners;

</script>

<template>
  <main>
    <div class="container">
      <TextBanner v-for="(banner, index) in textBanners" :key="index" :textBanner="banner"
        :id="banner.title.toLowerCase().replace('?', '')" />
      <BoxItem v-for="(box, index) in boxItems" :key="index" :box="box"
        :id="box.title.toLowerCase().replace(' ', '')" />
    </div>




  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
