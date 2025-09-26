<template>
  <header>
    <div class="header-content">
      <h1>Mi Portafolio</h1>
      <div class="autor">by: Jonathan Sierra</div>
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
  background-color: #42b983;
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
.header-content h1{
  margin: 0;
  padding-top: 20px;
}
.autor {
  text-align: left;
  padding-left: 5px;
  width: 100%;
  font-size: 1rem;
  font-weight: bolder;
  background-color: #348d65;
}
</style>