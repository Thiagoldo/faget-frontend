<script setup lang="ts">
import { RouterView } from 'vue-router';


</script>

<template>
  <div>
    <h1>App.vue | Route: {{ $route.fullPath }}</h1>
    <RouterView />
  </div>
</template>
