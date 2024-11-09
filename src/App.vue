<template>
  <div class="app">
    <!-- Condição de login -->
    <div v-if="!isLoggedIn">
      <HomePage @login-request="showLogin" />
      <LoginPage v-if="showLoginForm" @login-success="handleLoginSuccess" />
    </div>

    <!-- Exibe o Dashboard do Aluno ou Professor -->
    <div v-if="isLoggedIn">
      <StudentDashboard v-if="currentPage === 'studentDashboard'" />
      <TeacherDashboard v-if="currentPage === 'teacherDashboard'" />
    </div>
  </div>
</template>

<script>
import StudentDashboard from './components/pages/StudentDashboard.vue';
import TeacherDashboard from './components/pages/TeacherDashboard.vue';
import HomePage from './components/pages/HomePage.vue';
import LoginPage from './components/pages/LoginPage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    LoginPage,
    StudentDashboard,
    TeacherDashboard,
  },
  data() {
    return {
      currentPage: 'home', // Página padrão inicial
      isLoggedIn: false, // Estado de autenticação
      showLoginForm: false, // Controla a exibição do formulário de login
      userType: '', // Armazena o tipo de usuário (student ou teacher)
    };
  },
  methods: {
    // Exibe a página de login quando solicitado
    showLogin() {
      this.showLoginForm = true; // Mostra o formulário de login
    },
    // Método para fazer logout
    handleLogout() {
      this.isLoggedIn = false;
      this.currentPage = 'home'; // Retorna à página inicial após logout
    },
  },
};
</script>

<style scoped>
.app {
  text-align: center;
  margin-top: 20px;
}
</style>
