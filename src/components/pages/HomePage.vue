<template>
  <div class="homepage">
    <header>
      <nav class="navbar">
        <ul>
          <li><a href="#" @click.prevent="showPage('home')">Início</a></li>
          <li><a href="#" @click.prevent="showPage('about')">Sobre</a></li>
          <li><a href="#" @click.prevent="showPage('courses')">Cursos</a></li>
          <li><a href="#" @click.prevent="showPage('login')">Login</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- Página inicial -->
      <div class="banner" v-if="currentPage === 'home'">
        <h1>Bem-vindo à Plataforma de Ensino!</h1>
        <p>Aprenda no seu próprio ritmo com nossos cursos online.</p>
        <button @click="showPage('login')" class="cta-button">Acesse sua Conta</button>
      </div>

      <!-- Página de Login -->
      <LoginPage v-if="currentPage === 'login'" @login-success="handleLoginSuccess" />

      <!-- Exibe o dashboard do aluno ou professor se autenticado -->
      <div v-if="isAuthenticated">
        <StudentDashboard v-if="isStudent && currentPage === 'studentDashboard'" />
        <TeacherDashboard v-if="isTeacher && currentPage === 'teacherDashboard'" />
      </div>
    </main>

    <footer>
      <p>&copy; 2024 Plataforma de Ensino. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
import LoginPage from './LoginPage.vue';
import StudentDashboard from './StudentDashboard.vue';
import TeacherDashboard from './TeacherDashboard.vue';

export default {
  name: 'HomePage',
  components: {
    LoginPage,
    TeacherDashboard,
    StudentDashboard
  },
  data() {
    return {
      currentPage: 'home', // Página inicial
      isAuthenticated: false, // Estado de autenticação
      isStudent: false, // Estado para aluno
      isTeacher: false // Estado para professor
    };
  },
  methods: {
    // Muda a página atual com base no clique
    showPage(page) {
      this.currentPage = page;
    },
    
    // Método para tratar o login e definir o tipo de conta
    handleLoginSuccess(userType) {
      this.isAuthenticated = true; // Define que o usuário está autenticado

      if (userType === 'teacher') {
        this.isTeacher = true;
        this.isStudent = false;
        this.showPage('teacherDashboard'); // Exibe o dashboard do professor
      } else if (userType === 'student') {
        this.isStudent = true;
        this.isTeacher = false;
        this.showPage('studentDashboard'); // Exibe o dashboard do aluno
      }
    }
  }
};
</script>

<style scoped>
.homepage {
  text-align: center;
  font-family: Arial, sans-serif;
}

.navbar {
  background-color: #007bff;
  padding: 10px;
}

.navbar ul {
  list-style: none;
  padding: 0;
}

.navbar li {
  display: inline;
  margin: 0 15px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.banner {
  background: url('/src/assets/banner.png') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 50px 20px;
}

.banner h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.banner p {
  font-size: 18px;
  margin-bottom: 20px;
}

main {
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 1000px;
  padding: 20px;
}

.cta-button {
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.cta-button:hover {
  background-color: #e64a19;
}

footer {
  padding: 20px;
  background-color: #f1f1f1;
  color: #333;
}
</style>
