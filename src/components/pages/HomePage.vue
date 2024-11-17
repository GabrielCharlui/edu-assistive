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
        <h2>Aprenda no seu próprio ritmo com a EducaWeb Assistiva.</h2>
        <button @click="showPage('login')" class="cta-button">Acesse sua Conta</button>
      </div>

      <!-- Página sobre -->
      <div v-if="currentPage === 'about'">
        <div class="sobre-container">
          <section class="missao">
            <h2>Missão</h2>
            <p>A EducaWeb Assistiva tem como missão promover a inclusão digital e educacional de pessoas com deficiência, oferecendo uma plataforma acessível e interativa para aprendizagem.</p>
          </section>

          <section class="visao">
            <h2>Visão</h2>
            <p>Ser uma plataforma de referência em educação inclusiva, onde todos os alunos, independentemente de suas habilidades, tenham acesso igualitário ao conteúdo e ao aprendizado.</p>
          </section>

          <section class="valores">
            <h2>Valores</h2>
            <p>Acessibilidade</p>
            <p>Inclusão</p>
            <p>Empatia</p>
            <p>Inovação</p>
          </section>

          <section class="publico-alvo">
            <h2>Público-alvo</h2>
            <p>A plataforma é voltada para pessoas com deficiência (deficiência visual, auditiva, cognitiva, etc.), educadores, instituições de ensino e profissionais da área de acessibilidade.</p>
          </section>

          <section class="objetivos">
            <h2>Objetivos</h2>
            <p>Fornecer recursos de aprendizagem acessíveis, ferramentas de suporte como leitores de tela, legendas e conteúdo em formatos adaptados, promovendo a autonomia e inclusão dos alunos.</p>
          </section>
        </div>
      </div>
      
      <!-- Página cursos -->
      <div v-if="currentPage === 'courses'">
        <section class="features">
          <!-- Contêiner de cards com layout de grid -->
          <div class="cards-container">
            <!-- Loop para gerar 6 cards -->
            <div v-for="i in 6" :key="i" class="card">
              <img :src="getImageSrc(i)" class="card-img-top" :alt="getImageAlt(i)">
              <div class="card-body">
                <p class="card-text">
                  <strong>{{ getCursoDescricao(i) }}</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
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
      <p>&copy; 2024 EducaWeb Assistiva. Todos os direitos reservados.</p>
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
      isTeacher: false, // Estado para professor

      // Imagens e alt text para cursos
      courseImages: [
        { src: require('@/assets/images/portugues.png'), alt: 'Ícone da Matéria de Português' },
        { src: require('@/assets/images/matematica.png'), alt: 'Ícone da Matéria de Matemática' },
        { src: require('@/assets/images/fisica.png'), alt: 'Ícone da Matéria de Física' },
        { src: require('@/assets/images/biologia.png'), alt: 'Ícone da Matéria de Biologia' },
        { src: require('@/assets/images/quimica.png'), alt: 'Ícone da Matéria de Química' },
        { src: require('@/assets/images/espanhol.png'), alt: 'Ícone da Matéria de Espanhol' }
      ]
    };
  },
  methods: {
    // Muda a página atual com base no clique
    showPage(page) {
      this.currentPage = page;
    },

    getCursoDescricao(index) {
      const cursos = [
        'Matéria de Português',
        'Matéria de Matemática',
        'Matéria de Física',
        'Matéria de Biologia',
        'Matéria de Química',
        'Matéria de Espanhol',
      ];
      return cursos[index - 1]; // Retorna a descrição baseada no índice do curso
    },

    // Métodos para pegar a imagem e o alt text dos cursos
    getImageSrc(index) {
      return this.courseImages[index - 1].src;
    },
    getImageAlt(index) {
      return this.courseImages[index - 1].alt;
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
  background: url('/src/assets/banner1.png') no-repeat center center;
  background-size: cover;
  color: #000000;
  width: 100%;
  padding: 80px 20px;
  text-align: center;
}

.banner h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.banner p {
  font-size: 20px;
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

.card {
  margin-bottom: 20px;
  width: 18rem;
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

.sobre-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.sobre-container h1 {
  text-align: center;
  color: #3b82f6;
}

.sobre-container section {
  margin-bottom: 20px;
}

.sobre-container h2 {
  color: #1e40af;
}

.sobre-container ul {
  list-style-type: none;
  padding-left: 20px;
}

.sobre-container p {
  line-height: 1.6;
  color: #333;
}

.features {
  padding: 20px;
}

/* Layout grid para 2 colunas */
.cards-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas */
  gap: 20px; /* Espaçamento entre os cards */
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  padding: 10px;
  width: 80px;
  height: auto;
}

.card-body {
  padding: 15px;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

footer {
  padding: 20px;
  background-color: #f1f1f1;
  color: #333;
}
</style>
