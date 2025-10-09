<template>
    <div @click="mostrarInfo" class="card">
        <img :src="img" alt="Imagen de proyecto">
        <h2> {{ title }}</h2>
        <p> {{ description }}</p>
    </div>
    <div v-if='infoVisible' class="info">
        <div class="info-presentation">
            <img :src="img" alt="Imagen de proyecto">
            <nav>
                <ul>
                    <li><span class="label">Nombre del proyecto:</span> <span class="value">{{ title }}</span></li>
                    <li><span class="label">Lenguaje:</span> <span class="value">{{ languages }}</span></li>
                    <li><span class="label">Fecha de creación:</span> <span class="value">{{ date }}</span></li>
                </ul>
            </nav>
        </div>
        <div class="info-description">
            <p>{{ description }}</p>
        </div>
        <button @click="cerrarInfo">Cerrar</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    img: string
    title: string
    description: string
    languages: string
    date: string
}>()

const infoVisible = ref(false)

function mostrarInfo() {
    infoVisible.value = true
}

function cerrarInfo() {
    infoVisible.value = false
}
</script>

<style scoped>
.card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 1rem;
    max-width: 250px;
    min-width: 250px;
    cursor: pointer;
    transition: ease-in-out 150ms;
}

.card:hover {
    scale: 1.05;
}

img {
    width: 100%;
}

.info {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35dvw;
    height: 40dvh;
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
}

.info-presentation {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid rgb(207, 207, 207);
}

.info-presentation nav {
    flex: 1;
}

.info-presentation nav ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    border: 2px solid red;
    height: 150px;
    list-style: none;
}

.info-presentation nav li {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    line-height: 1.5;
}

.label {
    font-weight: bold;
}

.value {
    text-align: right;
}

.info-presentation img {
    width: 50%;
    margin: 1rem;
}

.info-description {
    flex: 1;
}
</style>