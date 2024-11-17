<template>
  <div class="conteudo-view-container">
    <div class="conteudo-flex-container">
      <!-- Tabela de Conteúdos -->
      <div class="conteudo-tabela-container">
        <div v-if="conteudos.length === 0" class="no-content-message">
          <p>Não há conteúdo publicado no momento.</p>
        </div>

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
      </div>

      <!-- Detalhe do Conteúdo (aparece após o clique) -->
      <div v-if="conteudoSelecionado" class="conteudo-detalhado-container">
        <div class="conteudo-detalhado">
          <h3>{{ conteudoSelecionado.titulo }}</h3>
          <p>{{ conteudoSelecionado.descricao }}</p>

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

          <button @click="fecharConteudo" aria-label="Fechar conteúdo">Fechar</button>
        </div>
      </div>
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
          videoUrl: 'https://www.youtube.com/watch?v=Sj5C24PsL60',
        },
        {
          titulo: 'Curso de Matemática',
          descricao: 'Conteúdo sobre álgebra e cálculo.',
          videoUrl: 'https://www.youtube.com/watch?v=qAl-3ljg8N4',
        },
        {
          titulo: 'Curso de Física',
          descricao: 'Conteúdo sobre leis da física e mecânica clássica.',
          videoUrl: 'https://www.youtube.com/watch?v=B2u8FYE9fWk',
        },
        {
          titulo: 'Curso de Biologia',
          descricao: 'Conteúdo sobre genética e biologia celular.',
          videoUrl: 'https://www.youtube.com/watch?v=-Vv3USW7iRU',
        },
      ],
      conteudoSelecionado: null, // Variável que armazenará o conteúdo selecionado
    };
  },
  methods: {
    // Método para gerar o link embutido do YouTube
    youtubeEmbed(url) {
      const match = url.match(/(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|(?:.*[?&]v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return match ? `https://www.youtube.com/embed/${match[1]}` : '';
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
  max-width: 1200px;
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

.conteudo-flex-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.conteudo-tabela-container {
  flex: 1;
}

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

.conteudo-detalhado-container {
  flex: 1;
  max-width: 500px;
}

.conteudo-detalhado {
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
