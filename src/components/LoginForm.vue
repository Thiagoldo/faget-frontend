<template>
  <v-container class="d-flex flex-column align-self-center ">
    <v-text-field label="Usuário" variant="underlined" class="pa-2" />
    <v-text-field label="Senha" variant="underlined" type="password" class="pa-2" />
    <RouterLink to="/home">
      <v-btn class="align-self-center">
        Entrar
      </v-btn>
    </RouterLink>
  </v-container>
</template>

<script>
import { RouterLink } from 'vue-router';

</script>