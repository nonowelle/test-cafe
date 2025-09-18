<script setup lang="ts">



</script>

<template>
  <div class="about">
    <div class="about-1">
      <h2>Qué hacemos?</h2>
      <img alt="Cafe Filo logo" class="logo" src="@/assets/coffee-logo.svg" width="125" height="125" />
    </div>
    <div class="about-2">
      <h2>Quienes somos?</h2>

    </div>
  </div>


</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;

  gap: 2rem;

  &-1,
  &-2 {

    display: flex;

    gap: 2rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 2rem;
    background-color: var(--color-background-soft);
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-direction: column;
    height: calc(100% - 2rem);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 2px 5px 30px 2px rgba(175, 175, 175, 0.77);
    }

  }


}

@media screen and (min-width: 785px) {
  .about {
    width: calc(50% - 2rem);
  }

}
</style>