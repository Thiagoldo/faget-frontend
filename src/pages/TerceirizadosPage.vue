<template>
  <v-container>
    <v-data-table-server v-model:items-per-page="itemsPerPage" :headers="headers" :search="nome" :items="terceirizados"
      :items-length="totalItems" item-value="nome" :loading="loading" @update:options="fetchTerceririzados"
      loading-text="Carregando...">
      <template v-slot:top>
        <div class="d-flex ga-2">
          <v-text-field v-model="nome" density="compact" placeholder="Pesquise pelo Nome" variant="underlined"
            hide-details>
          </v-text-field>
          <v-btn class="ml-4" variant="flat" color="green" @click="$router.push(`${$route.path}/new`)">Novo</v-btn>
          <!-- <v-btn icon="mdi-refresh" density="comfortable" color="primary"
            @click="() => fetchTerceririzados({ itemsPerPage=5, page=1, search='' })"></v-btn> -->
        </div>
      </template>
      <template v-slot:item.actions="{ item: terceirizado }">
        <div class="d-flex flex-row-reverse ga-2">
          <v-btn icon="mdi-eye" density="comfortable" color="yellow"
            @click="() => $router.push(`${$route.path}/${terceirizado.id_terceirizado}`)" />
        </div>
      </template>
    </v-data-table-server>
  </v-container>
  <router-view></router-view>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { ITerceirizado } from '../interfaces/terceirizados.interface';
import { getTerceirizados } from '../services/terceirizados.service';

const headers: any = [
  {
    title: "CPF",
    key: "cpf",
    align: "start",
    sortable: false,
  },
  {
    title: "Nome",
    key: "nome",
    align: "start",
    sortable: false,
  }, {
    title: "Ações",
    key: "actions",
    align: "end",
    sortable: false,
  },
]

const terceirizados = ref<ITerceirizado[]>([]);
const itemsPerPage = ref(5);
const totalItems = ref(0);
const loading = ref(false);
const nome = ref("");

const fetchTerceririzados = async ({ page, itemsPerPage, search }: { page: number, itemsPerPage: number, search: string }) => {
  loading.value = true;
  await getTerceirizados(itemsPerPage, page, search)
    .then(({ content, count }) => {
      totalItems.value = +count;
      terceirizados.value = content;
      loading.value = false;
    });
}

</script>