<script setup lang="ts">
import { RouterLink } from 'vue-router';

const text = "Brewing something smart...";
const textArray = text.split('').map(char => char === ' ' ? '\u00A0' : char); // Convert spaces to non-breaking spaces

// Function to get the letter index (excluding spaces)
const getLetterIndex = (index: number) => {
    let letterIndex = 0;
    for (let i = 0; i < index; i++) {
        if (textArray[i] !== '\u00A0') {
            letterIndex++;
        }
    }
    return letterIndex;
};
</script>

<template>
    <nav>
        <RouterLink to="/" class="bouncing-text">
            <span v-for="(char, index) in textArray" :key="index" :class="char === '\u00A0' ? 'space' : 'bounce-letter'"
                :style="char !== '\u00A0' ? { animationDelay: `${getLetterIndex(index) * 0.1}s` } : {}">
                {{ char }}
            </span>
        </RouterLink>
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

.bouncing-text {
    display: inline-block;
}

.bounce-letter {
    display: inline-block;
    animation: bounce 1s ease-in-out infinite;
    font-family: 'Silkscreen', monospace;
    font-weight: 700;
}

.space {
    display: inline-block;
    font-family: 'Silkscreen', monospace;
    font-weight: 700;
    width: 0.3em;
    min-width: 0.3em;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(1px);
    }

    60% {
        transform: translateY(-2px);
    }
}
</style>