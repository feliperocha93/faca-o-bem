<template>
  <header>
    <v-container class="d-flex justify-space-between py-4">
      <v-col class="d-flex align-center">
        <router-link to="/">
          <img
            :src="require('@/assets/projeto-faca-o-bem-32.png')"
            alt="Logo Projeto Faça o Bem"
            class="mr-2"
          />
        </router-link>
        <router-link to="/">
          <h1>Projeto Faça o Bem</h1>
        </router-link>
      </v-col>
      <v-col class="d-flex align-center">
        <nav class="ml-auto nav-list d-flex align-center">
          <router-link to="/sobre">Sobre</router-link>
          <router-link to="/como-ajudar">Como ajudar</router-link>
          <router-link to="/fale-conosco">Fale Conosco</router-link>
          <router-link to="/doe-agora"
            ><v-btn id="btn-doar" color="#4db055" height="32px"
              >Doe Agora</v-btn
            ></router-link
          >
        </nav>
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
  @include dosis($base-5, $s18);
}

.nav-list a {
  @include dosis($cinza-escuro-2, $s18);
  padding: 0 16px;
}

.nav-list .router-link-exact-active {
  color: $base-5;
}

#btn-doar {
  @include dosis($cinza-claro-1, $s14);
  text-transform: none;
}
</style>
