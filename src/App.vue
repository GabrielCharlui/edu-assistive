<template>
  <div class="app">
    <h1>Tela Principal</h1>
    <nav>
      <button @click="showPage('conteudo')">Indicar Conteúdo</button>
      <button @click="showPage('notas')">Lançar Notas</button>
      <button @click="showPage('notasList')">Notas Lançadas</button>
    </nav>

    <div v-if="currentPage === 'conteudo'">
      <ConteudoForm />
    </div>
    <div v-if="currentPage === 'notas'">
      <NotasForm />
    </div>
    <div v-if="currentPage === 'notasList'">
      <NotasList />
    </div>
  </div>
</template>

<script>
import ConteudoForm from './components/ConteudoForm.vue';
import NotasForm from './components/NotasForm.vue';
import NotasList from './components/NotasList.vue';

export default {
  name: 'App',
  components: {
    ConteudoForm,
    NotasForm,
    NotasList
  },
  data() {
    return {
      currentPage: 'conteudo' // Página padrão
    };
  },
  methods: {
    showPage(page) {
      this.currentPage = page; // Atualiza a página atual
    }
  }
};
</script>

<style scoped>
.app {
  text-align: center;
  margin-top: 20px;
}
nav {
  margin-bottom: 20px;
}
nav button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
nav button:hover {
  background-color: #0056b3;
}
</style>
