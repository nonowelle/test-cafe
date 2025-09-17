<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-bottom: 6rem;
    display: flex;
    justify-content: center;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}
</style>