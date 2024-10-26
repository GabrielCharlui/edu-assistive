<template>
  <div class="homepage">
    <h1>Tela Principal</h1>
    <nav>
      <router-link to="/conteudo">Indicar Conteúdo</router-link>
      <router-link to="/notas">Lançar Notas</router-link>
      <router-link to="/notas-list">Notas Lançadas</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.homepage {
  text-align: center;
  margin-top: 60px;
}
nav {
  margin: 20px 0;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
}
nav a:hover {
  text-decoration: underline;
}
</style>
