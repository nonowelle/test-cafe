<template>

    <section id="contact">
        <div class="contact-section">
            <h2>contact</h2>
            <div class="socials">
                <div class="social">@cafephilo</div>
                <div class="social">603624196</div>
            </div>

        </div>
    </section>
</template>

<script setup>
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
</style>