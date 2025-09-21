<script setup lang="ts">
import { textContent } from '@/content/textContent';
</script>

<template>
    <nav>

        <div class="first-section">
            <div class="company">
                <img class="logo" src="../assets/logo.png" alt="logo cafe philo">
                <a href="" class="company">Cafe Philo</a>
            </div>

            <div class="close-button">X</div>
        </div>
        <div class="second-section">
            <a href="#what">{{ textContent.navigation.what }}</a>
            <a href="#how">{{ textContent.navigation.how }}</a>
            <a href="#i'min">{{ textContent.navigation.imIn }}</a>
            <a href="#contact">{{ textContent.navigation.contact }}</a>
        </div>

    </nav>
</template>

<style lang="scss" scoped>
nav {
    width: 100%;
    height: 100vh;
    font-size: 18px;
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    justify-content: flex-start;
    background-color: var(--color-background);
    z-index: 100;

    border-radius: 8px;

    color: var(--color-links);
    align-items: center;

    border-bottom: 1px solid var(--color-links);
    border-radius: 0;
    padding-bottom: 1rem;


    &-wrapper {
        position: absolute;
        left: -100%;
    }
}


.first-section {
    display: flex;
    font-size: 32px;
    gap: 24px;
    align-items: center;

    width: 100%;
    justify-content: space-between;
}

.company {
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: center;
}



.second-section {
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    font-style: italic;
    gap: 1.5rem;
    flex-direction: column;

    align-self: flex-start;

}

.logo {
    max-width: 70px;
}

@media screen and (min-width: 750px) {
    nav {
        flex-direction: row;
        height: 80px;
        justify-content: space-between;
        gap: 1.5rem;

    }

    .close-button {
        display: none;
    }

    .first-section {
        width: 50%;
        align-self: auto;

    }

    .second-section {
        flex-direction: row;
        gap: 2rem;
    }
}
</style>