<script setup>
import { textContent } from '@/content/textContent';
import { useTemplateRef, ref } from 'vue';

let isOpen = ref(false);

const closeMobileNav = () => {
    console.log('closing');
    isOpen.value = false;
}

const openMobileNav = () => {
    console.log('OPENING')
    isOpen.value = true;
}

</script>

<template>
    <nav :class="{ open: isOpen }">

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
            <a href="#what" @click="closeMobileNav">{{ textContent.navigation.what }}</a>
            <a href="#how" @click="closeMobileNav">{{ textContent.navigation.how }}</a>
            <a href="#i'min" @click="closeMobileNav">{{ textContent.navigation.imIn }}</a>
            <a href="#contact" @click="closeMobileNav">{{ textContent.navigation.contact }}</a>
        </div>

    </nav>
</template>

<style lang="scss" scoped>
nav {
    width: 100%;
    max-height: 136px;
    height: 100vh;
    overflow: hidden;

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


    border-radius: 0;
    border-bottom: 1px solid var(--color-links);
    padding-bottom: 1rem;
    transition: max-height 0.4s linear;
    position: fixed;
    top: 0;
    left: 0;
    padding: 36px;


    &-wrapper {
        position: absolute;
        left: -100%;
    }

    &.open {
        max-height: 100vh;
        z-index: 1000;
        height: 100vh;

        .close-button {
            display: flex;
            cursor: pointer;
        }

        .menu-icon {
            display: none;
        }

        .second-section {
            display: flex;
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
    display: none;
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
        height: 100px;
        justify-content: space-between;
        gap: 1.5rem;

        max-height: 100px;

        border-bottom: 1px solid var(--color-links);

        .close-button {
            display: none;
        }

        .menu-icon {
            display: none;
        }

    }




    .first-section {
        width: 50%;
        align-self: auto;

    }

    .second-section {
        flex-direction: row;
        gap: 2rem;
        display: flex;
    }
}
</style>