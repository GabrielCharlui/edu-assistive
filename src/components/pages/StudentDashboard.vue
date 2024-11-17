<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>Bem-vindo ao Dashboard do Aluno!</h1>
      <p class="welcome-message">Aqui você pode visualizar seus conteúdos de forma rápida e fácil.</p>
    </div>
    <div class="dashboard-content">
        <h2>Conteúdos Disponíveis</h2>
        <ConteudoView />
    </div>
  </div>
</template>

<script>
import ConteudoView from '../content-student/ConteudoView.vue';

export default {
  name: 'DashboardPage',
  components: {
    ConteudoView,
  },
};
</script>

<style scoped>

.dashboard {
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  background-color: #f4f6f9;
  border-radius: 8px;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 30px;
}

.dashboard-header h1 {
  font-size: 2.5rem;
  color: #333;
}

.welcome-message {
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
}

.dashboard-content {
  
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.section {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.section h2 {
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 15px;
}

.conteudo-section {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
  .dashboard-header h1 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .welcome-message {
    font-size: 0.875rem;
  }
}
</style>
