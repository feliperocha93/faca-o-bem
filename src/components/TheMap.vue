<template>
  <section>
    <v-container py-8>
      <v-row>
        <v-col cols="3">
          <h3>Mapa do site</h3>
          <router-link to="/">Sobre</router-link>
          <router-link to="/">Quem já ajudou</router-link>
          <router-link to="/">Doação Material</router-link>
          <router-link to="/">Doação Virtual</router-link>
          <router-link to="/">Seja voluntário</router-link>
        </v-col>
        <v-col cols="3" class="mt-7">
          <router-link to="/">Fale Conosco</router-link>
          <router-link to="/">Zona Oeste</router-link>
          <router-link to="/">Zona Sul</router-link>
          <router-link to="/">Região do ABC</router-link>
          <button>Doar</button>
        </v-col>
        <v-col cols="3">
          <h3>Contato</h3>
          <ul>
            <li>matheus@hotmail.com</li>
            <li>(11) 99999-9999</li>
            <li>matheus@hotmail.com</li>
            <li>(11) 99999-9999</li>
          </ul>
        </v-col>
        <v-col>
          <h3>Redes Sociais</h3>
          <button>Facebook</button>
          <button>Instagram</button>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheMap"
});
</script>

<style lang="scss" scoped>
section {
  background-color: $cinza-claro-3;
}
a,
button {
  display: block;
}
</style>