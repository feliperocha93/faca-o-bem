<template>
  <header>
    <v-container class="d-flex justify-space-between py-4">
      <v-col class="d-flex align-center">
        <img
          :src="require('@/assets/projeto-faca-o-bem-64.png')"
          alt="Logo Projeto Faça o Bem"
          class="mr-2"
        />
        <h1>Projeto Faça o Bem</h1>
      </v-col>
      <v-col class="d-flex justify-space-between">
        <ul>
          <li>
            <router-link to="/">Sobre</router-link>
            <router-link to="/">Como ajudar</router-link>
            <router-link to="/">Fale Conosco</router-link>
            <router-link to="/">Doe Agora</router-link>
          </li>
        </ul>
      </v-col>
    </v-container>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheHeader"
});
</script>

<style lang="scss" scoped>
header {
  background-color: $cinza-claro-3;
}
h1 {
  @include dosis($base-5, $s24);
}
</style>