<script setup lang="ts">


import Form from '@/components/Form.vue';
interface TextContentProps {
    section: {
        title: string;
        subtitle: string;
        description: string;
        descriptionDeux?: string;
        hasForm?: boolean;
    }
}

const props = defineProps<TextContentProps>();

// Normalize title into a safe, predictable id used by nav anchors
const sectionId = props.section.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .trim();
</script>

<template>
    <section class="text-section" :id="sectionId">
        <h2>{{ section.title }} <br>{{ section.subtitle }}</h2>
        <p>{{ section.description }}</p>
        <p v-if="section.descriptionDeux" v-html="section?.descriptionDeux"></p>
        <Form v-if="section.hasForm" />
    </section>
</template>

<style lang="scss" scoped>
.text-section {
    height: calc(100vh + 136px);
    width: 100%;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    scroll-snap-align: center;

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