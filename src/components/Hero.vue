<script setup lang="ts">

</script>

<template>
    <div class="hero container">
        <div class="flip">
            <div class="flip__inner">
                <div class="flip__face flip__front">
                    <div class="wrapper">
                        <h1>Bienvenidos al café Phil0!</h1>
                    </div>
                </div>
                <div class="flip__face flip__back">
                    <div class="wrapper">
                        <h2>Descubre más</h2>
                        <p>Eventos, debates y buena compañía.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero {

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 60vh;
    perspective: 1000px;
}

.flip {
    border: 1px solid var(--color-border);
    border-radius: 12px;
    background-color: var(--color-background-soft-green);
    padding: 2.5rem;
    width: 100%;
    max-width: 960px;
    cursor: pointer;
}

.flip__inner {
    position: relative;
    width: 100%;
    min-height: 50vh;
    transition: transform 600ms ease;
    transform-style: preserve-3d;
    will-change: transform;
}

.hero:hover .flip__inner {
    transform: rotateY(180deg);
}

.flip__face {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}


.flip__back {
    transform: rotateY(180deg);
}

h1 {
    font-size: 3rem;
    text-align: center;
}

h2 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 0.5rem;
}

p {
    font-size: 18px;
    text-align: center;
}

@media screen and (min-width: 785px) {
    .hero {
        width: 50%;
    }
}
</style>
