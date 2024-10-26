<template>
    <div class="notas-list-container">
      <h2>Notas Lançadas</h2>
      
      <div class="filter-container">
        <div class="autocomplete-container">
          <input
            type="text"
            v-model="nomeFiltro"
            @input="updateSuggestions"
            @keydown.enter.prevent="applySuggestion"
            placeholder="Filtrar por nome"
            class="filter-input"
          />
          <ul v-if="filteredSuggestions.length > 0 && nomeFiltro" class="suggestions-list">
            <li v-for="(suggestion, index) in filteredSuggestions" :key="index" @click="selectSuggestion(suggestion)">
              {{ suggestion }}
            </li>
          </ul>
        </div>
  
        <div class="autocomplete-container">
          <input
            type="number"
            v-model="notaFiltro"
            placeholder="Filtrar por nota"
            min="0"
            max="10"
            class="filter-input"
          />
        </div>
        <button @click="clearFilters" class="clear-button">Limpar Filtros</button>
      </div>
  
      <table class="notas-table">
        <thead>
          <tr>
            <th>Nome do Aluno</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredNotas.length === 0">
            <td colspan="2" class="no-data">Nenhuma nota lançada ainda.</td>
          </tr>
          <tr v-for="(nota, index) in filteredNotas" :key="index">
            <td>{{ nota.nome }}</td>
            <td>{{ nota.nota }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notas: [],
        nomeFiltro: '',
        notaFiltro: null,
        filteredSuggestions: [],
      };
    },
    computed: {
      filteredNotas() {
        return this.notas.filter(nota => {
          const nomeMatch = nota.nome.toLowerCase().includes(this.nomeFiltro.toLowerCase());
          const notaMatch = this.notaFiltro !== null ? nota.nota === this.notaFiltro : true;
          return nomeMatch && notaMatch;
        });
      },
    },
    created() {
      this.loadNotas();
    },
    methods: {
      loadNotas() {
        const notas = JSON.parse(localStorage.getItem('notas')) || [];
        this.notas = notas;
      },
      updateSuggestions() {
        const uniqueNames = [...new Set(this.notas.map(nota => nota.nome))];
        this.filteredSuggestions = uniqueNames.filter(name =>
          name.toLowerCase().includes(this.nomeFiltro.toLowerCase())
        );
      },
      selectSuggestion(suggestion) {
        this.nomeFiltro = suggestion; // Preenche o input com a sugestão
        this.filteredSuggestions = []; // Limpa as sugestões
      },
      clearFilters() {
        this.nomeFiltro = '';
        this.notaFiltro = null;
        this.filteredSuggestions = [];
      },
    },
  };
  </script>
  
  <style scoped>
  .notas-list-container {
    max-width: 800px;
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
  
  .filter-container {
    display: flex;
    flex-direction: row; /* Alinha os campos lado a lado */
    align-items: flex-start; /* Alinha à esquerda */
    margin-bottom: 20px;
  }
  
  .autocomplete-container {
    position: relative;
    width: 50%; /* Ajusta a largura dos campos */
    margin-right: 10px; /* Espaço entre os campos */
  }
  
  .filter-input {
    width: 75%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  .filter-input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .suggestions-list {
    position: absolute;
    z-index: 10;
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
    width: calc(100% - 2px);
    max-height: 150px;
    overflow-y: auto;
    list-style-type: none; /* Remove os marcadores */
    padding: 0; /* Remove o padding padrão */
  }
  
  .suggestions-list li {
    padding: 10px;
    cursor: pointer;
  }
  
  .suggestions-list li:hover {
    background-color: #f0f0f0;
  }
  
  .clear-button {
    border: none;
    border-radius: 5px;
    background-color: #dc3545;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .clear-button:hover {
    background-color: #c82333;
  }
  
  .notas-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .notas-table th,
  .notas-table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ccc;
  }
  
  .notas-table th {
    background-color: #007bff;
    color: white;
  }
  
  .notas-table tbody tr:hover {
    background-color: #f1f1f1;
  }
  
  .no-data {
    text-align: center;
    color: #999;
    font-style: italic;
  }
  </style>
  