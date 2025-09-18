<template>
    <nav>
        <div class="first-section">
            <img class="logo" src="../assets/logo.png" alt="logo cafe philo">
            <a href="">Cafe Philo</a>
        </div>
        <div class="second-section">
            <a href="">What?</a>
            <a href="">How?</a>
            <a href="">I'm in</a>
            <a href="">Contact</a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin-bottom: 6rem;
    display: flex;
    justify-content: space-between;
    background-color: var(--color-background-orange);
    border-radius: 8px;
    padding: 2rem;

}

.first-section {
    display: flex;
    font-size: 32px;
    gap: 24px;

}

.second-section {
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    font-style: italic;
    gap: 48px;

}

.logo {
    max-width: 70px;
}
</style>