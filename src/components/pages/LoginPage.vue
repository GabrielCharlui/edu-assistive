<template>
    <div class="login-container">
      <h2>Acesso a Plataforma</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <input type="text" id="username" v-model="username" required placeholder="Digite seu usuário" />
        </div>
        <div class="form-group">
          <input type="password" id="password" v-model="password" required placeholder="Digite sua senha" />
        </div>
        <button type="submit" class="login-button">Entrar</button>
        <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
      handleLogin() {
        
        if (this.username === 'aluno@test.com' && this.password === '357951') {
          this.$emit('login-success', 'student');
          this.errorMessage = 'Credenciais válidas. Você está autenticado.'
        }
        else if (this.username === 'admin' && this.password === 'admin') {
          this.$emit('login-success', 'teacher');
          this.errorMessage = 'Credenciais válidas. Você está autenticado.'
        }
        else {
          this.errorMessage = 'Usuário ou senha incorretos.';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  
  input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .login-button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  