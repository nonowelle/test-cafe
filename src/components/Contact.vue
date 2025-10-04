<template>
    <section :id="currentContent.contact.sectionId">
        <div class="contact-section">
            <h2>{{ currentContent.navigation.contact }}</h2>
            <div class="socials">
                <div class="social">
                    <img class="logo" src="../assets/instagram.svg" />
                    @cafephilo
                </div>
                <div class="social">
                    <img class="logo" src="../assets/whatsapp.svg" />
                    603624196
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage';

const { currentContent } = useLanguage();
</script>

<style lang="scss" scoped>
.contact-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-height: 300px;
    border-top: 1px solid var(--color-links);
    padding: 5rem 3rem;
}

.socials {
    display: flex;
    gap: 10rem;
}

.social {

    display: flex;
    justify-content: center;
    gap: 0.7rem;
}

.logo {
    max-width: 20px;
    ;
}
</style>