<template>
  <v-navigation-dawer>
    <v-list-item title="FAGET" subtitle="Ferramenta Administrativa de Gestão de Terceirizados" />
    <v-divider />

    <RouterLink to="/terceirizados">
      <v-list-item title="Terceirizados" />
    </RouterLink>
  </v-navigation-dawer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>