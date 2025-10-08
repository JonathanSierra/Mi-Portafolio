<template>
  <header>
    <div class="header-content">
      <div class="contact-icons">
        <ul>
          <li>
            <a href="https://github.com/JonathanSierra">
              <img src="/src/assets/github.svg" alt="Github" width="24" height="24">
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jonathan-sierra-113b37298">
              <img src="/src/assets/linkedinBlack.png" alt="LinkedIn" width="24" height="24">
            </a>
          </li>
          <li>
            <a href="">
              <img src="/src/assets/linktree.svg" alt="Linktree" width="24" height="24">
            </a>
          </li>
        </ul>
      </div>
      <h1>Jonathan Sierra</h1>
      <div class="autor">
        <p>by: Jonathan Sierra</p>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
header {
  display: flex;
  width: 100%;
  min-height: 160px;
  background: #5b6ddf;
  color: white;
  text-align: center;
}

.header-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
}

.header-content h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
}

.contact-icons ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.autor {
  text-align: left;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  background-color: #395eaf;
}

.autor p{
  margin: 0 0 0 0.5rem;
}

p {
  margin: 0px 2px;
}

img {
  filter: invert(1);
}

a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  transition: color 150ms;
}
</style>