<template>
  <div class="dashboard">
    <h1>Bem-vindo ao Dashboard do Aluno!</h1>
    <div>
      <ConteudoView />
      <NotasView />
    </div>
  </div>
</template>

<script>
import ConteudoView from '../content-student/ConteudoView.vue';
import NotasView from '../content-student/NotasView.vue';

export default {
  name: 'DashboardPage',
  components: {
    ConteudoView,
    NotasView,
  },
};
</script>

<style scoped>
.dashboard {
  margin: 20px;
}
</style>
