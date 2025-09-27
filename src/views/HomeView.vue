<template>
  <div class="page-container">
    <Header />
    <div class="home-content">
      <section>
      <div class="myself">
        <div class="myself-profile">
          <img src="" alt="Jonathan Sierra.png">
          <ul>
            <li>
              <h2>Jonathan Andres Sierra Sierra</h2>
            </li>
            <li>
              <p>Santa Marta - Colombia <img src="/src/assets/Colombia-flag.png" alt="Bandera de colombia"></p>
            </li>
            <li>
              <p>19 años</p>
            </li>
            <li>
              <p>Estudiante</p>
            </li>
          </ul>
        </div>
        <div class="myself-description">
          <p>Desarrollador de software Colombiano, con experiencia en Vue, TypeScript y Python. Especializado en <strong>Backend.</strong></p>
        </div>
      </div>
      </section>
      <section>
        <div class="about-me">
          <h1>Sobre mi</h1>
          <p>Soy Jonathan Sierra, tengo 19 años, soy estudiante de la CBN en el programa desarrollo de software y aplicaciones moviles. 
            Naci un 16 de abril de 2006 en Santa Marta, Colombia, aspiro a ser un desarrollador de software experto.</p>
          </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.home-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
}

.myself {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1rem;
  border: 2px solid red;
  width: 50dvw;
}

.myself-profile {
  display: flex;
  border: 2px solid red;
  margin: 1rem;
}

.myself-profile img {
  border: 2px solid red;
  margin: 1rem;
  height: 10rem;
}

.myself-profile ul {
  border: 2px solid red;
  display: flex;
  padding: 0;
  align-items: baseline;
  flex-direction: column;
  list-style: none;
}

.myself-profile ul li {
  margin: 0;
}

.myself-profile ul li h2 {
  margin: 0;
}

.myself-profile ul li p {
  margin: 0;
  display: flex;
}
.myself-profile ul li p img{
  margin: 2px 4px;
  width: 20px;
  height: 16px;
}

.myself-description {
  flex: 1;
  display: flex;
  border: 2px solid red;
  margin: 1rem;
}

.myself-description p {
  font-size: 20px;
}

section{
  margin: 3rem;
}

.about-me{
  display: flex;
  flex-direction: column;
  width: 50dvw;
  border: 2px solid red;
}

.about-me h1{
  font-size: 40px;
  text-align: left;
}
.about-me p{
  text-align: left;
  font-size: 20px;
}
</style>