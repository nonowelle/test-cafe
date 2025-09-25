<script setup>

const props = defineProps({
    target: {
        type: HTMLElement,
        required: true,
    },
});

function handleClick() {
    if (props.target) {
        props.target.scrollIntoView({ behavior: "smooth" });
    }
}
</script>

<template>
    <div class="button-container">
        <button class="button" @click="handleClick"><span class="animate-bounce">↓</span></button>
    </div>
</template>

<style lang="scss" scoped>
.button {
    &-container {
        width: 100%;
        justify-content: center;
        display: flex;
        position: fixed;
        top: 90vh;
    }


    margin-top: 0.5rem;
    padding: 0.7rem 1.25rem;
    border-radius: 999px;
    border: 1px solid transparent;
    background: var(--color-links);
    color: var(--c-white);
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.1s ease,
    opacity 0.2s ease,
    background 0.2s ease;
    scroll-snap-align: start;

    .animate-bounce {
        animation: bounce 1s infinite;
    }
}
</style>