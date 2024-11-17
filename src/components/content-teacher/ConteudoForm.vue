<template>
  <div class="conteudo-form-container">
    <h2>Indicar Conteúdo</h2>
    
    <button 
      type="button" 
      class="submit-button-command" 
      @click="tipoConteudo = 'texto'"
    >
      Texto
    </button>
    <button 
      type="button" 
      class="submit-button-command" 
      @click="tipoConteudo = 'video'"
    >
      Vídeo
    </button>

    <!-- Exibe o formulário somente após a seleção do tipo de conteúdo -->
    <div v-if="tipoConteudo">
      <form @submit.prevent="submitConteudo" class="form">
        <div class="form-group">
          <label for="titulo">Título do Conteúdo</label>
          <input
            id="titulo"
            v-model="titulo"
            placeholder="Digite o título do conteúdo"
            required
            class="form-input"
          />
        </div>

        <div v-if="tipoConteudo === 'texto'" class="form-group">
          <label for="descricao">Descrição do Conteúdo</label>
          <textarea
            id="descricao"
            v-model="descricao"
            placeholder="Digite a descrição do conteúdo"
            required
            class="form-textarea"
          ></textarea>
        </div>

        <div v-if="tipoConteudo === 'video'" class="form-group">
          <label for="videoUrl">Link do Vídeo (YouTube)</label>
          <input
            id="videoUrl"
            v-model="videoUrl"
            placeholder="Cole o link do vídeo do YouTube"
            required
            class="form-input"
          />
        </div>

        <button type="submit" class="submit-button">Salvar Conteúdo</button>
        <div v-if="mensagem" class="message">{{ mensagem }}</div>
      </form>

      <div v-if="previewImage" class="image-preview">
        <h3>Pré-visualização da Imagem:</h3>
        <img :src="previewImage" alt="Imagem Preview" class="preview-image" />
      </div>

      <div v-if="videoUrl" class="video-preview">
        <h3>Vídeo Preview:</h3>
        <iframe
          :src="youtubeEmbed(videoUrl)"
          frameborder="0"
          allowfullscreen
          class="video-frame"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tipoConteudo: '',  // Inicialmente, não há tipo de conteúdo selecionado
      titulo: '',
      descricao: '',
      videoUrl: '',
      mensagem: '',
      previewImage: null,
    };
  },
  methods: {
    submitConteudo() {
      // Enviar ou armazenar os dados
      this.mensagem = `Conteúdo "${this.titulo}" salvo com sucesso!`;
      this.titulo = '';
      this.descricao = '';
      this.videoUrl = '';
      this.previewImage = null;
    },
    youtubeEmbed(url) {
      const videoId = url.split('v=')[1];
      const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
      return `https://www.youtube.com/embed/${
        ampersandPosition === -1 ? videoId : videoId.substring(0, ampersandPosition)
      }`;
    },
  },
};
</script>

<style scoped>
/* Estilos conforme anteriormente */
.conteudo-form-container {
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

.form-input,  
.form-textarea {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #007bff;
  outline: none;
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
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

.submit-button-command {
  padding: 10px;
  margin: 10px;
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

.image-preview {
  margin-top: 20px;
  text-align: center;
}

.preview-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.video-preview {
  margin-top: 20px;
  text-align: center;
}

.video-frame {
  width: 100%;
  height: 315px;
  border: none;
}
</style>
