<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <h1>Bem-vindo ao Dashboard do Professor!</h1>
      <p class="welcome-message">
        Aqui você pode gerenciar os conteúdos para os alunos.
      </p>
    </div>

    <div class="dashboard-content">
      <!-- Formulário de Conteúdo -->
      <section class="section conteudo-form-section">
        <h2>Adicionar Conteúdo</h2>
        <ConteudoForm />
      </section>
    </div>
  </div>
</template>

<script>
import ConteudoForm from '../content-teacher/ConteudoForm.vue';

export default {
  name: 'DashboardPage',
  components: {
    ConteudoForm,
  },
};
</script>

<style scoped>
/* Geral */
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

/* Layout da área de conteúdo */
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

.conteudo-form-section {
  background-color: #e9f7fe;
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
