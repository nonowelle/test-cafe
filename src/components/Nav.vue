<script setup lang="ts">
import { textContent } from '@/content/textContent';
</script>

<template>
    <nav>
        <div class="first-section">
            <img class="logo" src="../assets/logo.png" alt="logo cafe philo">
            <a href="">Cafe Philo</a>
        </div>
        <div class="second-section">
            <a href="">{{ textContent.navigation.what }}</a>
            <a href="">{{ textContent.navigation.how }}</a>
            <a href="">{{ textContent.navigation.imIn }}</a>
            <a href="">{{ textContent.navigation.contact }}</a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    width: 100%;
    font-size: 18px;
    text-align: center;

    display: flex;
    justify-content: space-between;
    background-color: var(--color-background-orange);
    border-radius: 8px;

    color: var(--color-links);
    align-items: center;
}

.first-section {
    display: flex;
    font-size: 32px;
    gap: 24px;
    align-items: center;

}

.second-section {
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    font-style: italic;
    gap: 48px;

}

.logo {
    max-width: 70px;
}
</style>