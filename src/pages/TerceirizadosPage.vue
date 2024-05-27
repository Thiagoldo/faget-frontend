<template>
  <v-container>
    <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :search="nome" :items="terceirizados"
      :items-length="totalItems" item-value="nome" :loading="loading" @update:options="fetchTerceririzados"
      loading-text="Carregando...">
      <template v-slot:top>
        <v-text-field v-model="nome" density="compact" placeholder="Pesquise pelo Nome" variant="underlined"
          hide-details>
        </v-text-field>
      </template>
    </v-data-table-server>
  </v-container>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { ITerceirizado } from '../interfaces/terceirizados.interface';
import { getTerceirizados } from '../services/terceirizados.service';

const headers = ref([
  {
    title: "CPF",
    key: "cpf",
    align: "start"
  },
  {
    title: "Nome",
    key: "nome",
    align: "start"
  },
])

const terceirizados = ref<ITerceirizado[]>([]);
const itemsPerPage = ref(5);
const totalItems = ref(0);
const loading = ref(false);
const nome = ref("");

const fetchTerceririzados = async ({ page, itemsPerPage, search }: { page: number, itemsPerPage: number, search: string }) => {
  loading.value = true;
  console.log(search);
  await getTerceirizados(itemsPerPage, page, search)
    .then(({ content, count }) => {
      totalItems.value = +count;
      terceirizados.value = content;
      loading.value = false;
    });
}
</script>