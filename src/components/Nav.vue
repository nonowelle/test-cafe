<script setup>
import { ref, nextTick } from 'vue';
import { useLanguage } from '@/composables/useLanguage';


const { currentContent, toggleLanguage, currentLanguage } = useLanguage();
console.log(currentLanguage.value)

let isOpen = ref(false);

const closeMobileNav = () => {
    isOpen.value = false;
}

const openMobileNav = () => {
    isOpen.value = true;
}

const scrollToSection = (sectionId) => {

    closeMobileNav();

    setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
        }
    }, 300);
}
</script>

<template>
    <nav :class="{ open: isOpen }">

        <div class="first-section">
            <div class="company">
                <img class="logo" src="../assets/logo.png" alt="logo cafe philo">
                <p class="company">caféphilo</p>
            </div>

            <div class="close-button" @click="closeMobileNav">X</div>
            <div class="menu-icon" @click="openMobileNav" ref="menuIcon">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div ref="secondSection" :class="[{ visible: isOpen }, 'second-section']">
            <a href="#what" @click="scrollToSection(currentContent.banners[0].sectionId)">{{
                currentContent.navigation.what }}</a>
            <a href="#how" @click="scrollToSection(currentContent.banners[1].sectionId)">{{
                currentContent.navigation.how }}</a>
            <a href="#imin" @click="scrollToSection(currentContent.boxItems[0].sectionId)">{{
                currentContent.navigation.imIn }}</a>
            <a href="#contact" @click="scrollToSection(currentContent.contact.sectionId)">{{
                currentContent.navigation.contact }}</a>
            <div class="lang-switcher">
                <div class="lang">
                    {{ currentLanguage }}
                    <font-awesome-icon icon="angle-down" />
                    <div class="lang-options" @click="toggleLanguage">{{ currentLanguage === 'en' ? 'es' : 'en' }}
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>

<style lang="scss" scoped>
nav {
    width: 100%;
    max-height: 136px;
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
    font-weight: 500;
    align-items: center;


    border-radius: 0;
    border-bottom: 1px solid var(--color-links);
    padding-bottom: 1rem;
    transition: max-height 0.4s linear;
    position: sticky;
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
    margin-bottom: 0;
    font-size: 1.4rem;
    padding: 3px;
}



.second-section {
    display: none;
    justify-content: space-between;
    font-size: 32px;
    font-style: italic;
    gap: 1.5rem;
    flex-direction: column;
    align-self: center;

    align-self: flex-start;
    width: 100%;

}


.lang-switcher {
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;

    font-size: 1.3rem;
    cursor: pointer;
    padding: 5px;
    transition: none;
    position: relative;

    svg {
        font-size: 1rem;
    }

    p {
        margin: 0;
    }

    a {
        display: flex;
    }

    &:hover {
        .lang-options {
            display: block;
            z-index: 100;

            padding: 8px 16px;
            border-radius: 8px;
            position: absolute;
            top: 50px;

            background-color: var(--c-purple-light);
            color: white;
            font-size: 1rem;
            cursor: pointer;

            a {
                color: white;
                transform: none;
                font-size: 1rem;
                ;
            }
        }
    }

}

.lang-options {
    display: none;
}

.logo {
    max-width: 70px;
}

@media screen and (min-width: 1024px) {
    nav {
        flex-direction: row;
        height: auto;
        justify-content: space-between;
        gap: 1.5rem;
        padding: 16px;

        border-bottom: 1px solid var(--color-links);

        .close-button {
            display: none;
        }

        .menu-icon {
            display: none;
        }

    }


    .first-section {
        width: 30%;
        align-self: auto;

    }

    .second-section {
        flex-direction: row;

        display: flex;
        align-self: auto;
        width: auto;
    }
}
</style>