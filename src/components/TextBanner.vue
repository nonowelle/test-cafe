<script setup lang="ts">
import { textContent } from '@/content/textContent';
</script>

<template>
    <div class="text-banner">
        <h2>{{ textContent.banner.title }} <br><br>{{ textContent.banner.subtitle }}</h2>
        <p>{{ textContent.banner.description }}</p>
    </div>
</template>

<style lang="scss" scoped>
.text-banner {
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
</style>