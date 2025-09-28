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

const props = defineProps<TextContentProps>();

const bannerId = props.textBanner.title.toLowerCase().replace(/'/g, '');
</script>

<template>
    <div class="text-banner" :id="bannerId">
        <h2>{{ textBanner.title }} <br>{{ textBanner.subtitle }}</h2>
        <p>{{ textBanner.description }}</p>
        <p v-if="textBanner.descriptionDeux" v-html="textBanner?.descriptionDeux"></p>
    </div>
</template>

<style lang="scss" scoped>
.text-banner {
    height: calc(100vh + 136px);
    width: 100%;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    scroll-snap-align: start;
    // position: relative;
    // top: 136px;

    @media screen and (max-width: 680px) {
        height: auto;

    }



    h2 {
        max-width: 80%;

        @media screen and (max-width: 1024px) {
            max-width: none;

        }
    }

    p {
        max-width: 60%;

        @media screen and (max-width: 1024px) {
            max-width: none;

        }
    }

}
</style>