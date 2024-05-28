<template>
  <v-container>
    <form action="">
      <v-text-field v-model="dataTerceririzado.cpf" label="CPF" variant="outlined" density="comfortable"></v-text-field>
      <v-text-field v-model="dataTerceririzado.nome" label="Nome" variant="outlined"
        density="comfortable"></v-text-field>
      <v-select v-model="dataTerceririzado.sexo" label="Sexo" :items="sexos" item-title="label" item-value="value"
        variant="outlined" density="comfortable" return-object></v-select>
      <v-text-field v-model="dataTerceririzado.data_nascimento" label="Data de Nascimento" type="date"
        variant="outlined" density="comfortable"></v-text-field>
      <v-text-field v-model="dataTerceririzado.rg" label="RG" variant="outlined" density="comfortable"></v-text-field>
      <v-text-field v-model="dataTerceririzado.pis" label="PIS" variant="outlined" density="comfortable"></v-text-field>
      <v-text-field v-model="dataTerceririzado.ctps" label="CTPS" variant="outlined"
        density="comfortable"></v-text-field>
      <v-text-field v-model="dataTerceririzado.email" label="Email" variant="outlined"
        density="comfortable"></v-text-field>
      <v-text-field v-model="dataTerceririzado.telefone" label="Telefone" variant="outlined"
        density="comfortable"></v-text-field>
      <v-text-field v-model="dataTerceririzado.endereco" label="Endereço" variant="outlined"
        density="comfortable"></v-text-field>
      <v-container class="d-flex ga-4 justify-center">
        <v-btn @click="handleSubmit" color="green">Salvar</v-btn>
        <v-btn v-if="dataTerceririzado.id_terceirizado > 0" @click="handleDeleteTerceirizado"
          color="red">Deletar</v-btn>
      </v-container>
    </form>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ICreateUpdateTerceirizado } from '../interfaces/terceirizados.interface';
import { deleteTerceirizado, getTerceirizadoById, saveTerceirizado, updateTerceirizado } from '../services/terceirizados.service';

const router = useRouter();
const route = useRoute();
const id_terceirizado = route.params.id;

const initialTerceirizadoState = {
  id_terceirizado: 0,
  cpf: "",
  nome: "",
  sexo: "",
  data_nascimento: "",
  rg: "",
  pis: "",
  ctps: "",
  email: "",
  telefone: "",
  endereco: "",
}

const dataTerceririzado = reactive(initialTerceirizadoState);

const sexos = reactive(["F", "M"])

const handleSubmit = async () => {
  let newTerceirizado: ICreateUpdateTerceirizado;
  try {
    if (dataTerceririzado.id_terceirizado) {
      newTerceirizado = await updateTerceirizado(dataTerceririzado as unknown as ICreateUpdateTerceirizado);
      alert("Terceirizado atualizado com sucesso");
    } else {
      newTerceirizado = await saveTerceirizado(dataTerceririzado as unknown as ICreateUpdateTerceirizado);
      alert("Terceirizado salvo, id: " + newTerceirizado.id_terceirizado);
    }
    router.go(-1);
  } catch (error) {
    alert("Erro ao salvar Terceirizado: " + error);
  }
}

const handleDeleteTerceirizado = async () => {
  try {
    await deleteTerceirizado(dataTerceririzado as unknown as ICreateUpdateTerceirizado);
    alert("Terceirizado excluído com sucesso");
    router.go(-1);
  } catch (error) {
    alert("Erro ao deletear Terceirizado: " + error);
  }
}

onMounted(async () => {
  if (id_terceirizado) {
    try {
      const terceirizado = await getTerceirizadoById(+id_terceirizado);
      dataTerceririzado.id_terceirizado = terceirizado.id_terceirizado ? terceirizado.id_terceirizado : 0;
      dataTerceririzado.cpf = terceirizado.cpf;
      dataTerceririzado.nome = terceirizado.nome;
      dataTerceririzado.sexo = terceirizado.sexo ? terceirizado.sexo : "";
      dataTerceririzado.data_nascimento = terceirizado.data_nascimento ? (new Date(terceirizado.data_nascimento)).toLocaleDateString('pt-br', { timeZone: 'UTC' }).replace(/(\d{2})\/(\d{2})\/(\d{4})/g, '$3-$2-$1') : "";
      dataTerceririzado.rg = terceirizado.rg ? terceirizado.rg : "";
      dataTerceririzado.pis = terceirizado.pis ? terceirizado.pis : "";
      dataTerceririzado.ctps = terceirizado.ctps ? terceirizado.ctps : "";
      dataTerceririzado.email = terceirizado.email ? terceirizado.email : "";
      dataTerceririzado.telefone = terceirizado.telefone ? terceirizado.telefone : "";
      dataTerceririzado.endereco = terceirizado.endereco ? terceirizado.endereco : "";
    } catch (error) {
      alert("Erro ao buscar Terceirizado: " + error);
    }
  }
});
</script>