<script setup lang="ts">
import HelloWorld from './HelloWorld.vue';
</script>

<template>
    <div class="hero container">
        <img alt="Cafe Filo logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        <div class="wrapper">
            <HelloWorld msg="Bienvenido al cafe Filo!" />
        </div>
    </div>
</template>

<style scoped>
.hero {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 6rem;
    gap: 2rem;
    align-items: center;
}
</style>