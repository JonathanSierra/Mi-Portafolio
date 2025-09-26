<template>
    <div class="card">
        <h2> {{ title }}</h2>
        <p> {{ description }}</p>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        title: string
        description: string
    }>()
</script>

<style scoped>
.card{
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    padding: 1rem;
    margin: 1rem;
    min-width: 200px;
}
.card:hover{
    scale: 1.1;
    transition: ease-in-out 150ms;
}
</style>