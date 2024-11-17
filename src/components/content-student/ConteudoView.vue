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

          <!-- Reprodutor de Áudio (se houver) -->
          <div v-if="conteudoSelecionado.audioUrl" class="audio-preview">
            <h4>Áudio do Conteúdo:</h4>
            <!-- Reprodutor de Áudio -->
            <audio controls>
              <source :src="conteudoSelecionado.audioUrl" type="audio/mp3" />
              Seu navegador não suporta o reprodutor de áudio.
            </audio>
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
          audioUrl: 'https://polly-golang.s3.us-east-2.amazonaws.com/ceac6c64-eb46-4592-bf1d-42cb7a454fbf.mp3?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJGMEQCIHyoamOepOeHr9P%2FOw20Vs%2B%2BacYdDySt227%2F5pAYUfh7AiAcEa4PorYeidse4l0PH6aO1DtuSKOTaZgcGQp3MQ1ppCrHAwhNEAAaDDQ5MTA4NTM4OTExNSIMSJ50lG%2Fs0%2FQ%2Bn%2F7GKqQDzkfEji97e7pqhgKicdXTdNjpOx4JipknI3PFe3pac3u5x4ScuutVUkkId2qOZ7cs9ufVl7NB0hkmEx%2BSUyl5FE09Duhv1p194laKNrHYJcZ2yQ9qYl0osUbUuema%2FpnH7l9RGs0hcLBSiK2hPSJ19hugIAvk2HXeSJ8zmXlL9WyuT0aUmehg0%2BIi4gG5yb1G31UI%2BUpmCM6%2BzaWNSamd4sQReXpOtHfyfLss5tXEWJ4eGAwuBfDcIGirjMHYkFTylos2n0crLld%2FDDhqMwN007uY6yEOwHUM1fXbyiYwnL2LPnnq9GTIzrug7h%2B4nDoY6PbkeHeR3m36pHXsfiBgSfVYnPmkOZ5QTGgjhpSeZXYA%2FBLkw59aTDEzpw4ih1zIXDs3rx2iMnAApY7B4T0YPhXQ2Vw%2FtZy2MXsUYDY4U8n8sAOFjei8%2BG%2BVUGdvAoAldTzB1V6rG3Xe5xcz6lX7DPykeEGte94OZqaxBLSkwKBM4cRcYaEB0nEZy3%2Fj40JZ9EwyHz%2BSCZkpeUokp4GSV1OcEY6jAXJQEADFpCf6tTLMpYziMOqW6bkGOuUCzr2G5mM%2Fk3FN5vbLsNhpT14E7lf8Ks1zOI74i0crpcI053fiNrvS%2FC9PMM%2B1eZieWPTCO2gvzb6EnvXXdi9xbUa0KnhWuzm27piRhIu2hYWVL1WnPx3KjYgBKwrAyfUl6a6ntJ8zUISKIS1y5w1kIPM9rufxau77KwEoparqlKhZQYthTI%2F41vVoXxZ4GWFR5a8rB7K8HflRXQABQLRrKVEsNfp30huadfmN0%2FwsgEMVNY%2FHbmbSWsKAxAFeNrIwEuiKSg8I3G3jsWktMULPcl8iFlcwE4mciJzghHJtIKd979NB%2FSzpJX6OLPf%2BLdphiId6amSkHh02Rvu087ZSN2Sa%2BEZXLGJF4JEDBvGLLOVE0iwba6PQWXT8X%2FwcPPmGb%2BAKeT4hUs9bpGpoJSk7Hd95YfScGleUMRdtp1RVXUAzhKQ6byKORuXacpK1bmJ8XFp7hoxFNuqzyrURbR1ih6PSgi6M&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAXEVXYLU53Y6FOK5K%2F20241117%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20241117T200750Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=1fe74f995b88bbd5e5587f1e6d37d5fa2fbd2be88ee02f7eaa0e9749b1359757',
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
/* Estilos permanecem os mesmos */
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

.video-preview,
.audio-preview {
  margin-top: 20px;
  text-align: center;
}

.video-frame {
  width: 100%;
  height: 315px;
  border: none;
}
</style>
