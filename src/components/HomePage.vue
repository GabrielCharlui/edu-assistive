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
      <div class="banner" v-if="currentPage === 'home'">
        <h1>Bem-vindo à Plataforma de Ensino!</h1>
        <p>Aprenda no seu próprio ritmo com nossos cursos online.</p>
        <button @click="showPage('login')" class="cta-button">Acesse sua Conta</button>
      </div>

      <!-- Exibe o componente LoginUsuario se a página atual for 'login' -->
      <LoginUsuario v-if="currentPage === 'login'" @login-success="handleLoginSuccess" />

      <div v-if="currentPage === 'about'">
        <h2>Sobre</h2>
        <p>Informações sobre a plataforma...</p>
      </div>
      
      <div v-if="currentPage === 'courses'">
        <h2>Cursos</h2>
        <p>Lista de cursos disponíveis...</p>
      </div>

      <!-- Agora é possível exibir o conteúdo do Dashboard após o login -->
      <div v-if="currentPage === 'dashboard'">
        <ConteudoForm />
        <NotasForm />
        <NotasList />
      </div>
    </main>

    <footer>
      <p>&copy; 2024 Plataforma de Ensino. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
import LoginUsuario from './LoginUsuario.vue'; // Importa o componente de login
import ConteudoForm from './ConteudoForm.vue'; // Componente do conteúdo do dashboard
import NotasForm from './NotasForm.vue'; // Componente de notas no dashboard
import NotasList from './NotasList.vue'; // Lista de notas

export default {
  name: 'HomePage',
  components: {
    LoginUsuario,
    ConteudoForm,
    NotasForm,
    NotasList
  },
  data() {
    return {
      currentPage: 'home' // Define a página inicial como 'home'
    };
  },
  methods: {
    showPage(page) {
      this.currentPage = page; // Altera a página atual
    },
    handleLoginSuccess() {
      this.currentPage = 'dashboard'; // Redireciona para a página 'dashboard' após o login
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
