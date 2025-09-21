<template>
    <div class="box-item">
        <h3>{{ box.title }}</h3>
        <p v-if="box.description">{{ box.description }}</p>
        <button v-if="box.cta" class="cta-button">{{ box.cta }}</button>
    </div>
</template>

<script setup lang="ts">

interface BoxItemProps {
    box: {
        title: string;
        description: string;
        cta: string;
    };
}

defineProps<BoxItemProps>();

</script>

<style lang="scss" scoped>
.box-item {
    padding: 1.5rem;
    border-radius: 8px;
    flex: 1;
    min-width: 250px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;


}

.cta-button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: var(--color-links);

    transition: color ease 0.4s;

    &:hover {
        color: var(--color-cta);
    }
}
</style>