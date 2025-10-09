<template>
  <div class="page-container">
    <Header />
    <div class="home-content">
      <section>
        <div class="myself">
          <img src="" alt="Jonathan Sierra.png">
          <div class="myself-profile">
            <ul>
              <h2>Jonathan Andres<br>Sierra Sierra</h2>
              <!-- <li>
                  <p>Santa Marta - Colombia <img src="/src/assets/Colombia-flag.png" alt="Bandera de colombia"></p>
                </li>
                <li>
                  <p>19 años</p>
                </li>
                <li>
                  <p>Estudiante</p>
                </li> -->
            </ul>
            <div class="myself-description">
              <p>Desarrollador de software <strong>Fullstack</strong> Colombiano, con experiencia en <strong
                  class="vue">Vue</strong>, <strong class="ts">TypeScript</strong>, <strong class="py">Python</strong> y
                <strong class="java">Java</strong>. Especializado en <strong>Backend.</strong>
              </p>
            </div>
          </div>
        </div>
        <div class="professional-info">
          <p>Futura Frase...</p>
          <div>
            <ul>
              <h2>Años de experiencia: {{ añosExperiencia }}</h2>
              <li>Experiencia...</li>
            </ul>
            <ul>
              <h2>Lenguajes aprendidos:</h2>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
      </section>
      <button @click="showProjects" class="cssbuttons-io">
        <span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
              fill="currentColor"></path>
          </svg>
          Proyectos</span>
      </button>
      <div v-if="projectsVisible" class="projects-content">
        <h1>Proyectos</h1>
        <div class="cards-container">
          <Card v-for="(proyecto, idx) in proyectos" :key="idx" :img="proyecto.img" :title="proyecto.title"
            :description="proyecto.description" :languages="proyecto.languages" :date="proyecto.date" />
        </div>
      </div>
      <Stripe class="stripe"></Stripe>
      <section>
        <div class="about-me">
          <h1>Sobre mi</h1>
          <p>Soy Jonathan Sierra, tengo 19 años y actualmente estudio en el programa de Desarrollo de Software y
            Aplicaciones Móviles en la CBN. <br>
            Nací el 16 de abril de 2006 en Santa Marta, Colombia.Me apasiona el desarrollo fullstack y aspiro a
            convertirme en un desarrollador experto. Desde siempre me ha fascinado la tecnología, prácticamente he
            estado frente a un computador desde que tengo memoria.
          </p>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import Stripe from '../components/Stripe.vue';

const proyectos = [
  {
    title: 'Formulario_App', description: 'Formulario para mi empresa familiar que toma los datos de los clientes y los guarda en una base de datos en mongoDB',
    img: '/src/assets/Formulario_App.png', languages: 'Python', date: ''
  },
  { title: 'Proyecto 2', description: 'Descripcion del proyecto 2', img: '', languages: '', date: '' },
  { title: 'Proyecto 3', description: 'Descripcion del proyecto 3', img: '', languages: '', date: '' },
  { title: 'Proyecto 4', description: 'Descripcion del proyecto 4', img: '', languages: '', date: '' },
  { title: 'Proyecto 5', description: 'Descripcion del proyecto 5', img: '', languages: '', date: '' }
]

let añosExperiencia = 1

let projectsVisible = ref(false)

function showProjects() {
  projectsVisible.value = !projectsVisible.value
}
</script>

<style scoped>
.stripe {
  width: 70dvw;
  height: 5px;
  margin: 1rem 0 1rem 0;
}

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
  flex-direction: row;
  margin: 3rem 0 0 0;
  width: 40dvw;
}

.myself-profile {
  display: flex;
  flex-direction: column;
  border: 2px solid red;
  margin: 1rem;
  width: 60%;
}

.myself img {
  border: 2px solid red;
  margin: 1rem 0 1rem 1rem;
  width: 40%;
  border-radius: 25px;
  box-shadow: #428adc 0px 0px 20px 0px;
}

.myself-profile ul {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
  padding: 0;
  flex-direction: column;
  list-style: none;
}

/* .myself-profile ul li {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
} */

.myself-profile ul h2 {
  margin: 0;
  font-size: 32px;
  color: #428adc;
}

.myself-profile ul li p {
  margin: 0;
  display: flex;
}

.myself-profile ul li p img {
  margin: 7px 6px;
  width: 20px;
  height: 16px;
}

.myself-description {
  display: flex;
  margin: 0 1rem 1rem 1rem;
}

.myself-description p {
  font-size: 24px;
}

.professional-info p {
  border: 2px solid red;
  color: #5254e3;
  font-size: 24px;
  font-weight: bold;
}

.professional-info div {
  display: flex;
  justify-content: space-evenly;
  border: 2px solid red;
}

.professional-info ul {
  margin: 0;
  list-style: none;
}

.professional-info ul h2 {
  color: #428adc;
}

.projects-content {
  width: 100%;
  height: 75dvh;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.projects-content h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #646cff;
  box-shadow: #646cff 0px 0px 6px 0px;
  border-radius: 15px;
  height: 2rem;
  width: 150px;
  margin: 5rem 0 3rem 0;
  padding: 5px;
  color: #ffffff;
  font-size: 25px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 0;
  margin: 0 0 5rem 0;
}

section {
  margin: 3rem;
}

.about-me {
  display: flex;
  flex-direction: column;
  width: 50dvw;
  margin: 0 0 4rem 0;
}

.about-me h1 {
  color: #457bf1;
  font-size: 40px;
  text-align: left;
}

.about-me p {
  text-align: left;
  font-size: 24px;
}

strong {
  color: #457bf1;
}

.vue {
  color: rgb(23, 156, 94);
}

.ts {
  color: rgb(11, 68, 155);
}

.py {
  color: rgb(196, 184, 27);
}

.java {
  color: rgb(255, 166, 0);
}

/* IO BUTTON */

.cssbuttons-io {
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.05em;
  border-radius: 0.8em;
  cursor: pointer;
  border: 3px solid #457bf1;
  background: linear-gradient(to right, #5254e3, #428adc);
  color: ghostwhite;
  overflow: hidden;
  margin: 0 0 3rem 0;
}

.cssbuttons-io svg {
  width: 1.2em;
  height: 1.2em;
  margin-right: 0.5em;
}

.cssbuttons-io span {
  position: relative;
  z-index: 10;
  transition: color 0.4s;
  color: #457bf1;
  display: inline-flex;
  align-items: center;
  padding: 0.8em 1.2em 0.8em 1.05em;
}

.cssbuttons-io::before,
.cssbuttons-io::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.cssbuttons-io::before {
  content: "";
  background: #ffff;
  width: 120%;
  left: -10%;
  transform: skew(30deg);
  transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

.cssbuttons-io:hover::before {
  transform: translate3d(100%, 0, 0);
}

.cssbuttons-io:active {
  transform: scale(0.95);
}

.cssbuttons-io:hover span {
  color: #fff;
}

/* IO BUTTON */
</style>