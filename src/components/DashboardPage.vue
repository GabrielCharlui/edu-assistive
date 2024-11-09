<template>
    <div class="dashboard">
      <!-- Cabeçalho e navegação -->
      <header>
        <nav class="navbar">
          <ul>
            <!-- Links para a navegação dentro do Dashboard -->
            <li><a href="#" @click.prevent="showPage('conteudo')">Conteúdo</a></li>
            <li><a href="#" @click.prevent="showPage('notas')">Notas</a></li>
            <li><a href="#" @click.prevent="showPage('notasList')">Lista de Notas</a></li>
          </ul>
        </nav>
      </header>
  
      <!-- Conteúdo do Dashboard -->
      <main>
        <div v-if="currentPage === 'conteudo'">
          <ConteudoForm />
        </div>
  
        <div v-if="currentPage === 'notas'">
          <NotasForm />
        </div>
  
        <div v-if="currentPage === 'notasList'">
          <NotasList />
        </div>
      </main>
  
      <!-- Rodapé -->
      <footer>
        <p>&copy; 2024 Plataforma de Ensino. Todos os direitos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import ConteudoForm from './ConteudoForm.vue'; // Importa o componente de conteúdo
  import NotasForm from './NotasForm.vue'; // Importa o componente de notas
  import NotasList from './NotasList.vue'; // Importa o componente de lista de notas
  
  export default {
    name: 'DashboardPage',
    components: {
      ConteudoForm,
      NotasForm,
      NotasList,
    },
    data() {
      return {
        currentPage: 'conteudo' // A página inicial dentro do Dashboard (conteúdo)
      };
    },
    methods: {
      showPage(page) {
        this.currentPage = page; // Muda a página interna do Dashboard
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
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
  
  main {
    margin-top: 20px;
    padding: 20px;
  }
  
  footer {
    padding: 20px;
    background-color: #f1f1f1;
    color: #333;
  }
  </style>
  