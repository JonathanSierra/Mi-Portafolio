<template>
  <div class="page-container">
    <Header />
    <div class="home">
      <h1>Proyectos:</h1>
      <div class="cards-container">
        <Card v-for="(proyecto, idx) in proyectos" :key="idx" :title="proyecto.title" :description="proyecto.description" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue';

const proyectos = [
  { title: 'Proyecto 1', description: 'Descripcion del proyecto 1' },
  { title: 'Proyecto 2', description: 'Descripcion del proyecto 2' },
  { title: 'Proyecto 3', description: 'Descripcion del proyecto 3' },
  { title: 'Proyecto 4', description: 'Descripcion del proyecto 4' },
  { title: 'Proyecto 5', description: 'Descripcion del proyecto 5' }
]

</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.home {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #42b983;
  border-radius: 15px;
  height: 2rem;
  width: 150px;
  margin-left: 10px;
  padding: 5px;
  color: #ffffff;
  font-size: 25px;
}
</style>