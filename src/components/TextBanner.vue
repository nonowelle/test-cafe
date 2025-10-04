<script setup lang="ts">


interface TextContentProps {
    textBanner: {
        title: string;
        subtitle: string;
        description: string;
        descriptionDeux: string;
    }
}

const props = defineProps<TextContentProps>();

// Normalize title into a safe, predictable id used by nav anchors
const bannerId = props.textBanner.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .trim();
</script>

<template>
    <section class="text-banner" :id="bannerId">
        <h2>{{ textBanner.title }} <br>{{ textBanner.subtitle }}</h2>
        <p>{{ textBanner.description }}</p>
        <p v-if="textBanner.descriptionDeux" v-html="textBanner?.descriptionDeux"></p>
    </section>
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

    @media screen and (max-width: 1024px) {
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