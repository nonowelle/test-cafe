<script setup lang="ts">



</script>

<template>
  <div class="about">
    <h2>Qué hacemos?</h2>
    <img alt="Cafe Filo logo" class="logo" src="@/assets/coffee-logo.svg" width="125" height="125" />
  </div>

</template>

<style scoped>
.about {
  width: 100%;
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

}
</style>