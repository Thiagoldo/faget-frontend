<template>
  <v-container>
    <form action="">
      <v-text-field v-model="dataEmpresa.cnpj" label="CNPJ" variant="outlined" density="comfortable"></v-text-field>
      <v-text-field v-model="dataEmpresa.razao_social" label="Razão Social" variant="outlined"
        density="comfortable"></v-text-field>
      <v-text-field v-model="dataEmpresa.nome_fantasia" label="Nome Fantasia" variant="outlined"
        density="comfortable"></v-text-field>
      <v-text-field v-model="dataEmpresa.entidade_sindical" label="Entidade Sindical" variant="outlined"
        density="comfortable"></v-text-field>
      <v-text-field v-model="dataEmpresa.data_base_cct" label="Data Base CCT" type="date" variant="outlined"
        density="comfortable"></v-text-field>
      <v-container class="d-flex ga-4 justify-center">
        <v-btn @click="handleSubmit" color="green">Salvar</v-btn>
        <v-btn v-if="dataEmpresa.id_empresa > 0" @click="handleDeleteEmpresa" color="red">Deletar</v-btn>
      </v-container>
    </form>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ICreateUpdateEmpresa } from '../interfaces/empresas.interface';
import { deleteEmpresa, getEmpresaById, saveEmpresa, updateEmpresa } from '../services/empresas.service';

const router = useRouter();
const route = useRoute();
const id_empresa = route.params.id;

const initialEmpresaState = {
  id_empresa: 0,
  cnpj: "",
  razao_social: "",
  nome_fantasia: "",
  entidade_sindical: "",
  data_base_cct: "",
}

const dataEmpresa = reactive(initialEmpresaState);

const handleSubmit = async () => {
  let newEmpresa: ICreateUpdateEmpresa;
  try {
    if (dataEmpresa.id_empresa) {
      newEmpresa = await updateEmpresa(dataEmpresa as unknown as ICreateUpdateEmpresa);
      alert("Empresa atualizada com sucesso");
    } else {
      newEmpresa = await saveEmpresa(dataEmpresa as unknown as ICreateUpdateEmpresa);
      alert("Empresa salva, id: " + newEmpresa.id_empresa);
    }
    router.go(-1);
  } catch (error) {
    alert("Erro ao salvar Empresa: " + error);
  }
}

const handleDeleteEmpresa = async () => {
  try {
    await deleteEmpresa(dataEmpresa as unknown as ICreateUpdateEmpresa);
    alert("Empresa excluída com sucesso");
    router.go(-1);
  } catch (error) {
    alert("Erro ao deletear Empresa: " + error);
  }
}

onMounted(async () => {
  if (id_empresa) {
    try {
      const empresa = await getEmpresaById(+id_empresa);
      dataEmpresa.id_empresa = empresa.id_empresa ? empresa.id_empresa : 0;
      dataEmpresa.cnpj = empresa.cnpj;
      dataEmpresa.razao_social = empresa.razao_social;
      dataEmpresa.nome_fantasia = empresa.nome_fantasia;
      dataEmpresa.entidade_sindical = empresa.entidade_sindical || "";
      dataEmpresa.data_base_cct = empresa.data_base_cct ? (new Date(empresa.data_base_cct)).toLocaleDateString('pt-br', { timeZone: 'UTC' }).replace(/(\d{2})\/(\d{2})\/(\d{4})/g, '$3-$2-$1') : "";
    } catch (error) {
      alert("Erro ao buscar Empresa: " + error);
    }
  }
});
</script>