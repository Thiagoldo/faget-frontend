<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <v-btn @click="$router.go(-1)" icon="mdi-chevron-left"></v-btn>
    <h1>App.vue | Route: {{ $route.fullPath }}</h1>
    <v-app>
      <RouterView />
    </v-app>
  </div>
</template>
