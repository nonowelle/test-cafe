<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Brewing...</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin-bottom: 6rem;
    display: flex;
    justify-content: center;
    background-color: var(--color-background-orange);
    border-radius: 8px;
    padding: 2rem;

}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}
</style>