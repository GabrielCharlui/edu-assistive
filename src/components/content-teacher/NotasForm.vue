<template>
    <div class="notas-form-container">
      <h2>Lançar Notas</h2>
      <form @submit.prevent="submitNotas" class="form">
        <div class="form-group">
          <label for="nomeAluno">Nome do Aluno</label>
          <input
            id="nomeAluno"
            v-model="nomeAluno"
            placeholder="Digite o nome do aluno"
            required
            class="form-input"
          />
        </div>
  
        <div class="form-group">
          <label for="nota">Nota</label>
          <input
            id="nota"
            type="number"
            v-model="nota"
            placeholder="Digite a nota (0-10)"
            min="0"
            max="10"
            required
            class="form-input"
          />
        </div>
  
        <button type="submit" class="submit-button">Salvar Nota</button>
        <div v-if="mensagemNotas" class="message">{{ mensagemNotas }}</div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nomeAluno: '',
        nota: '',
        mensagemNotas: ''
      };
    },
    methods: {
      submitNotas() {
        // Obter as notas existentes do Local Storage ou criar um novo array
        const notas = JSON.parse(localStorage.getItem('notas')) || [];
  
        // Adicionar a nova nota
        notas.push({ nome: this.nomeAluno, nota: this.nota });
  
        // Salvar o array atualizado de notas no Local Storage
        localStorage.setItem('notas', JSON.stringify(notas));
  
        // Mensagem de sucesso
        this.mensagemNotas = `Nota de ${this.nomeAluno} lançada com sucesso: ${this.nota}`;
  
        // Limpar os campos
        this.nomeAluno = '';
        this.nota = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .notas-form-container {
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
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }
  
  .form-input {
    width: 90%;
    padding: 10px;
    border: 1px solid #ccc;  border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  .form-input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .submit-button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #0056b3;
  }
  
  .message {
    margin-top: 20px;
    color: #28a745;
    text-align: center;
  }
  </style>
  