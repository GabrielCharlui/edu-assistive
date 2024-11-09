<template>
  <div class="notas-view-container">
    <h2>Visualizar Notas</h2>

    <!-- Exibir a lista de notas se houver -->
    <div v-if="notas.length === 0" class="no-notes-message">
      <p>Não há notas lançadas no momento.</p>
    </div>

    <!-- Lista de Notas -->
    <div v-else>
      <div
        v-for="(notaItem, index) in notas"
        :key="index"
        class="nota-card"
      >
        <p><strong>Nome do Aluno:</strong> {{ notaItem.nome }}</p>
        <p><strong>Nota:</strong> {{ notaItem.nota }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notas: [], // Lista de notas dos alunos
    };
  },
  created() {
    // Carregar as notas do Local Storage ao montar o componente
    this.notas = JSON.parse(localStorage.getItem('notas')) || [];
  },
};
</script>

<style scoped>
.notas-view-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.nota-card {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.no-notes-message {
  text-align: center;
  font-size: 18px;
  color: #666;
}

p {
  color: #555;
  font-size: 16px;
}

strong {
  color: #007bff;
}
</style>
