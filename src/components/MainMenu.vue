<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item title="FAGET" subtitle="Ferramenta Administrativa de Gestão de Terceirizados" />
    </v-list>

    <v-divider />

    <v-list>
      <RouterLink to="/terceirizados">
        <v-list-item title="Terceirizados" />
      </RouterLink>

      <RouterLink to="/empresas">
        <v-list-item title="Empresas" />
      </RouterLink>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>