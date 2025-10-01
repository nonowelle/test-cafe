<template>
    <section class="box-item" :id="bannerId">
        <h2>{{ box.title }}</h2>
        <p v-if="box.description">{{ box.description }}</p>
        <Form />
    </section>
</template>

<script setup lang="ts">
import Form from './Form.vue'

interface BoxItemProps {
    box: {
        title: string;
        description: string;
    };
}

const props = defineProps<BoxItemProps>();
// Normalize title into a safe, predictable id used by nav anchors
const bannerId = props.box.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .trim();
console.log(bannerId)

</script>

<style lang="scss" scoped>
.box-item {
    padding: 1.5rem;
    border-radius: 8px;

    min-width: 250px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

}

@media screen and (min-width: 1024px) {
    .box-item {
        height: 100vh;
    }

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