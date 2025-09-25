<script setup lang="ts">
import { textContent } from '@/content/textContent';

interface TextContentProps {
    textBanner: {
        title: string;
        subtitle: string;
        description: string;
        descriptionDeux: string;
    }
}

defineProps<TextContentProps>();
</script>

<template>
    <div class="text-banner" :id="textBanner.title">
        <h2>{{ textBanner.title }} <br>{{ textBanner.subtitle }}</h2>
        <p>{{ textBanner.description }}</p>
        <p v-if="textBanner.descriptionDeux" v-html="textBanner?.descriptionDeux"></p>
    </div>
</template>

<style lang="scss" scoped>
.text-banner {
    height: 100vh;
    width: 100%;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    scroll-snap-align: start;


    p,
    h2 {
        max-width: 80%;
    }

}
</style>