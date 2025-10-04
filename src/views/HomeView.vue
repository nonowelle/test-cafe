<script setup lang="ts">

import BoxItem from '@/components/BoxItem.vue';
import TextBanner from '../components/TextBanner.vue';
import ScrollButton from '@/components/ScrollButton.vue';
import Contact from '@/components/Contact.vue';
import { ref } from 'vue';

import { useLanguage } from '@/composables/useLanguage';

const { currentContent } = useLanguage();

const boxItems = currentContent.value.boxItems;
const textBanners = currentContent.value.banners;

const sectionRefs = ref([]);

</script>

<template>
  <main>

    <TextBanner v-for="(banner, index) in currentContent.banners" :key="index" :textBanner="banner"
      :id="banner.sectionId" />
    <BoxItem v-for="(box, index) in currentContent.boxItems" :key="index" :box="box" :id="box.sectionId" />
    <ScrollButton />
    <Contact />





  </main>
</template>

<style scoped>
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
