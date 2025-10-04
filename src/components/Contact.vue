<template>
    <section :id="currentContent.contact.sectionId">
        <div class="contact-section">
            <h2>{{ currentContent.navigation.contact }}</h2>
            <div class="socials">
                <a href="https://instagram.com/cafephil0" target="_blank" class="social">
                    <img class="logo" src="../assets/instagram.svg" alt="Instagram" />
                    @cafephilo
                </a>
                <a href="https://wa.me/603624196" target="_blank" class="social">
                    <img class="logo" src="../assets/whatsapp.svg" alt="WhatsApp" />
                    603624196
                </a>
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
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: var(--color-links);
    transition: color 0.3s ease;
    padding: 0.5rem;
    border-radius: 8px;
}

.social:hover {
    color: var(--color-cta);
    background-color: rgba(255, 255, 255, 0.1);
}

.logo {
    max-width: 20px;
    ;
}
</style>