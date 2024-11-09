<template>
  <div class="conteudo-view-container">
    <h2>Conteúdos Disponíveis</h2>

    <!-- Exibe a lista de conteúdos se a tabela estiver vazia -->
    <div v-if="conteudos.length === 0" class="no-content-message">
      <p>Não há conteúdo publicado no momento.</p>
    </div>

    <!-- Tabela de Conteúdos -->
    <table v-if="conteudos.length > 0" class="conteudo-tabela">
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(conteudo, index) in conteudos"
          :key="index"
          @click="abrirConteudo(conteudo)"
          class="conteudo-linha"
        >
          <td>{{ conteudo.titulo }}</td>
          <td>{{ conteudo.descricao }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Detalhe do Conteúdo (aparece após o clique) -->
    <div v-if="conteudoSelecionado" class="conteudo-detalhado">
      <h3>{{ conteudoSelecionado.titulo }}</h3>
      <p>{{ conteudoSelecionado.descricao }}</p>

      <!-- Visualização de Imagem (se houver) -->
      <div v-if="conteudoSelecionado.imagem" class="image-preview">
        <h4>Imagem do Conteúdo:</h4>
        <img :src="conteudoSelecionado.imagem" alt="Conteúdo Imagem" class="preview-image" />
      </div>

      <!-- Visualização de Vídeo (se houver) -->
      <div v-if="conteudoSelecionado.videoUrl" class="video-preview">
        <h4>Vídeo do Conteúdo:</h4>
        <iframe
          :src="youtubeEmbed(conteudoSelecionado.videoUrl)"
          frameborder="0"
          allowfullscreen
          class="video-frame"
        ></iframe>
      </div>

      <button @click="fecharConteudo">Fechar</button>
    </div>

    <!-- Mensagem se não houver conteúdo -->
    <div v-if="conteudos.length > 0 && !conteudos[0].titulo" class="no-content-message">
      <p>Conteúdo indisponível no momento.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conteudos: [
  {
    titulo: 'Curso de História',
    descricao: 'Conteúdo sobre a Lofi Girl do YouTube',
    imagem: 'https://images.squarespace-cdn.com/content/v1/580fbaac440243d8731ffc57/46cb49b3-63d7-40e1-9cd0-540fbecdc39c/Lofi+Girl+16x9.jpeg',
    videoUrl: 'https://www.youtube.com/watch?v=Sj5C24PsL60',
  },
  {
    titulo: 'Curso de Matemática',
    descricao: 'Conteúdo sobre álgebra e cálculo.',
    imagem: '/images/matematica.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=qAl-3ljg8N4',
  },
  {
    titulo: 'Curso de Física',
    descricao: 'Conteúdo sobre leis da física e mecânica clássica.',
    imagem: '/images/fisica.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=B2u8FYE9fWk',
  },
  {
    titulo: 'Curso de Biologia',
    descricao: 'Conteúdo sobre genética e biologia celular.',
    imagem: '/images/biologia.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=-Vv3USW7iRU',
  },
],
      conteudoSelecionado: null, // Variável que armazenará o conteúdo selecionado
    };
  },
  methods: {
    // Método para gerar o link embutido do YouTube
    youtubeEmbed(url) {
      const videoId = url.split('v=')[1];
      const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
      return `https://www.youtube.com/embed/${
        ampersandPosition === -1 ? videoId : videoId.substring(0, ampersandPosition)
      }`;
    },

    // Método para abrir o conteúdo detalhado
    abrirConteudo(conteudo) {
      this.conteudoSelecionado = conteudo;
    },

    // Método para fechar o conteúdo detalhado
    fecharConteudo() {
      this.conteudoSelecionado = null;
    },
  },
};
</script>

<style scoped>
.conteudo-view-container {
  max-width: 900px;
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

.no-content-message {
  text-align: center;
  font-size: 18px;
  color: #666;
}

/* Estilo da Tabela */
.conteudo-tabela {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.conteudo-tabela th,
.conteudo-tabela td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.conteudo-tabela th {
  background-color: #f4f4f4;
}

.conteudo-linha {
  cursor: pointer;
}

.conteudo-linha:hover {
  background-color: #f1f1f1;
}

/* Estilo do Card de Detalhes */
.conteudo-detalhado {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Estilos de Imagem e Vídeo */
.image-preview {
  margin-top: 15px;
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
