<template>
  <div class="dashboard">
    <h1>Bem-vindo ao Dashboard do Professor!</h1>
    <div>
      <ConteudoForm />
      <NotasForm />
      <NotasList />
    </div>
  </div>
</template>

<script>
import ConteudoForm from '../content-teacher/ConteudoForm.vue';
import NotasForm from '../content-teacher/NotasForm.vue';
import NotasList from '../content-teacher/NotasList.vue';

export default {
  name: 'DashboardPage',
  components: {
    ConteudoForm,
    NotasForm,
    NotasList
  },
};
</script>

<style scoped>
.dashboard {
  margin: 20px;
}
</style>
