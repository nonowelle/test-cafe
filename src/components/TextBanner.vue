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
        <h2>{{ textBanner.title }} <br><br>{{ textBanner.subtitle }}</h2>
        <p>{{ textBanner.description }}</p>
        <p v-if="textBanner.descriptionDeux">{{ textBanner?.descriptionDeux }}</p>
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

    p,
    h2 {
        max-width: 800px;
    }

}
</style>