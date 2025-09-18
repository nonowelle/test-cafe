<script setup lang="ts">
import { textContent } from '@/content/textContent';

interface TextContentProps {
    textBanner: {
        title: string;
        subtitle: string;
        description: string;
    }
}

defineProps<TextContentProps>();
</script>

<template>
    <div class="text-banner">
        <h2>{{ textBanner.title }} <br><br>{{ textBanner.subtitle }}</h2>
        <p>{{ textBanner.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
.text-banner {
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-top: 1px solid var(--color-links);

    &:nth-of-type(2) {
        border-bottom: 1px solid var(--color-links);
    }

}
</style>