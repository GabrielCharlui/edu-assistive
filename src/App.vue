<template>
  <div class="app">
    <!-- Condição de login -->
    <div v-if="!isLoggedIn">
      <HomePage @login-request="showLogin" />
      <LoginUsuario v-if="showLoginForm" @login-success="handleLoginSuccess" />
    </div>

    <!-- Condição para páginas após login -->
    <div v-if="isLoggedIn">
      <!-- Menu de navegação -->
      <nav>
        <button @click="showPage('dashboard')">Dashboard</button>
        <button @click="showPage('conteudo')">Conteúdo</button>
        <button @click="showPage('notas')">Notas</button>
        <button @click="showPage('notasList')">Notas List</button>
        <button @click="handleLogout">Logout</button>
      </nav>

      <!-- Exibe o DashboardPage se a página atual for 'dashboard' -->
      <DashboardPage v-if="currentPage === 'dashboard'" />
      
      <!-- Exibe o ConteudoForm se a página atual for 'conteudo' -->
      <ConteudoForm v-if="currentPage === 'conteudo'" />
      
      <!-- Exibe o NotasForm se a página atual for 'notas' -->
      <NotasForm v-if="currentPage === 'notas'" />
      
      <!-- Exibe o NotasList se a página atual for 'notasList' -->
      <NotasList v-if="currentPage === 'notasList'" />
    </div>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import LoginUsuario from './components/LoginUsuario.vue';
import DashboardPage from './components/DashboardPage.vue';
import ConteudoForm from './components/ConteudoForm.vue';
import NotasForm from './components/NotasForm.vue';
import NotasList from './components/NotasList.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    LoginUsuario,
    DashboardPage,
    ConteudoForm,
    NotasForm,
    NotasList,
  },
  data() {
    return {
      currentPage: 'home', // Página padrão inicial
      isLoggedIn: false, // Estado de autenticação
      showLoginForm: false, // Controla a exibição do formulário de login
    };
  },
  methods: {
    showPage(page) {
      this.currentPage = page; // Atualiza a página atual
    },
    showLogin() {
      this.showLoginForm = true; // Mostra o formulário de login
    },
    handleLoginSuccess() {
      this.isLoggedIn = true; // Atualiza o estado de autenticação
      this.showLoginForm = false; // Oculta o formulário de login
      this.currentPage = 'dashboard'; // Redireciona para a página padrão após login
    },
    handleLogout() {
      this.isLoggedIn = false; // Atualiza o estado de autenticação
      this.currentPage = 'home'; // Redireciona para a página principal
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
