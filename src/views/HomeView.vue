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
            <p>Desarrollador de software <strong>Fullstack</strong> Colombiano, con experiencia en <strong
                class="vue">Vue</strong>, <strong class="ts">TypeScript</strong>, <strong class="py">Python</strong> y
              <strong class="java">Java</strong>. Especializado en <strong>Backend.</strong>
            </p>
          </div>
        </div>
      </section>
      <button class="cssbuttons-io">
        <a href="/portafolio">
        <span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
              fill="currentColor"></path>
          </svg>
          Proyectos</span>
          </a>
      </button>
      <section>
        <div class="about-me">
          <h1>Sobre mi</h1>
          <p>Soy Jonathan Sierra, tengo 19 años, soy estudiante de la CBN en el programa desarrollo de software y
            aplicaciones moviles.
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
  border: 2px solid red;
  width: 31dvw;
}

.myself-profile {
  display: flex;
  border: 2px solid red;
  margin: 1rem 1rem 0 1rem;
}

.myself-profile img {
  border: 2px solid red;
  margin: 1rem;
  height: 13rem;
  width: 15rem;
}

.myself-profile ul {
  border: 2px solid red;
  display: flex;
  padding: 0;
  margin: 1rem 1rem 1rem 0;
  align-items: baseline;
  flex-direction: column;
  list-style: none;
}

.myself-profile ul li {
  margin: 0;
  font-weight: bold;
  font-size: 20px;
}

.myself-profile ul li h2 {
  margin: 0 0 1rem 0;
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
  flex: 1;
  display: flex;
  border: 2px solid red;
  margin: 0 1rem 1rem 1rem;
}

.myself-description p {
  font-size: 24px;
}

section {
  margin: 3rem;
}

.about-me {
  display: flex;
  flex-direction: column;
  width: 50dvw;
  border: 2px solid red;
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
  background: linear-gradient(to right, #2d30e2, #2a7ddd);
  color: ghostwhite;
  overflow: hidden;
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

.cssbuttons-io a{
  color: #457bf1;
}

.cssbuttons-io a:hover{
  color: #ffff;
}

/* IO BUTTON */

</style>