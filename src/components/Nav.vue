<script setup>
import { textContent } from '@/content/textContent';
import { useTemplateRef, ref } from 'vue';

const closeMobileNav = () => {
    console.log('closing');
}

const openMobileNav = () => {
    console.log('OPENING"')
    isOpen = true;


}

const isOpen = ref(false);
const secondSection = useTemplateRef('secondSection');


</script>

<template>
    <nav :class="isOpen ? 'is-open' : ' '">

        <div class="first-section">
            <div class="company">
                <img class="logo" src="../assets/logo.png" alt="logo cafe philo">
                <a href="" class="company">Cafe Philo</a>
            </div>

            <div class="close-button" @click="closeMobileNav">X</div>
            <div class="menu-icon" @click="openMobileNav" ref="menuIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div ref="secondSection" :class="[{ visible: isOpen }, 'second-section']">
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

    &.is-open {
        .close-button {
            display: flex;
            cursor: pointer;
        }

        .menu-icon {
            display: none;
        }
    }

    .close-button {
        display: none;
    }

    .menu-icon {
        display: flex;

        flex-direction: column;
        cursor: pointer;


        span {
            display: block;
            border-radius: 15px;
            width: 25px;
            height: 2px;
            background-color: var(--color-links);
            margin: 3px;
            transition: all 0.4s ease;
        }

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

    .menu-icon {
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