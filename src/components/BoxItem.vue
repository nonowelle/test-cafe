<template>
    <div class="box-item">
        <h3>{{ box.title }}</h3>
        <p v-if="box.description">{{ box.description }}</p>
        <button v-if="box.cta" class="cta-button">{{ box.cta }}</button>
    </div>
</template>

<script setup lang="ts">

interface BoxItemProps {
    box: {
        title: string;
        description: string;
        cta: string;
    };
}

defineProps<BoxItemProps>();

</script>

<style scoped>
.box-item {
    padding: 1.5rem;

    border-radius: 8px;

    flex: 1;
    min-width: 250px;
}

.box-item h3 {
    margin: 0 0 1rem 0;
    color: #333;
}

.box-item p {
    margin: 0 0 1rem 0;
    color: #666;
    line-height: 1.5;
}
</style>