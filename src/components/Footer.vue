<template>
  <footer>
    <div class="footer-content">
      <nav>
        <li>
          <a href="https://github.com/JonathanSierra" target="_blank" rel="noopener">
            <img src="/src/assets/github.svg" alt="GitHub" width="24" height="24">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://github.com/JonathanSierra" target="_blank" rel="noopener">
            <img src="/src/assets/contact.svg" alt="Contact" width="24" height="24">
            Contact
          </a>
        </li>
        <li>
          <a href="https://github.com/JonathanSierra" target="_blank" rel="noopener">
            <img src="/src/assets/about me.svg" alt="About me" width="24" height="24">
            About me
          </a>
        </li>
      </nav>
      <div class="copyright">© 2025 Jonathan Sierra. Todos los derechos reservados.</div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
  display: flex;
  color: #ffff;
  width: 100%;
  min-height: 200px;
  background-color: #224737
}

.footer-content {
  display: flex;
  width: 100%;
  flex-direction: column;
}

nav {
  flex: 1;
  background-color: #0f251c;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 1rem;
  padding: 1rem;
  width: 12rem;
  justify-content: center;
  gap: 8px;
}

nav li {
  display: flex;
  width: 120px;
  gap: 10px;
  border-radius: 5px;
  padding: 2px;
  list-style: none;
  transition: background-color 150ms;
}

nav li a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  transition: color 150ms;
}

nav li:hover {
  background-color: #fff;
}

nav li:hover a {
  color: #000000;
}

nav li img {
  filter: invert(1);
  transition: filter 150ms;
}

nav li:hover img {
  filter: invert(0);
  transition: filter 150ms;
}

.copyright {
  background-color: #0f251c;
  width: 100%;
  text-align: center;
  padding: 10px 0;
}
</style>