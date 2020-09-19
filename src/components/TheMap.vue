<template>
  <section>
    <v-container py-8 class="d-flex justify-center px-8 px-md-0">
      <v-row class="nav-list">
        <v-col cols="12" md="6" class="mb-8 mb-md-0">
          <h3>Mapa do site</h3>
          <v-row no-gutters>
            <v-col cols="6">
              <router-link to="/sobre#introducao">Sobre</router-link>
              <router-link to="/sobre#nosso-time">Nosso Time</router-link>
              <router-link to="/como-ajudar#0">Doação Material</router-link>
              <router-link to="/como-ajudar#1">Doação Virtual</router-link>
              <router-link to="/como-ajudar#2">Seja voluntário</router-link>
            </v-col>
            <v-col cols="6">
              <router-link to="/fale-conosco">Fale Conosco</router-link>
              <router-link to="/doe-agora" id="doar">Doar</router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6" md="3">
          <h3>Contato</h3>
          <ul class="list-style ">
            <li>matheus@hotmail.com</li>
            <li>(11) 99999-9999</li>
            <li>matheus@hotmail.com</li>
            <li>(11) 99999-9999</li>
          </ul>
        </v-col>
        <v-col class="d-flex flex-column" cols="6" md="3">
          <h3>Redes Sociais</h3>
          <v-btn
            outlined
            class="social-btn mb-4 py-2"
            color="#8B243F"
            height="auto"
            link
            href="https://www.facebook.com/projetoofacaobem"
            target="_blank"
            >Facebook</v-btn
          >
          <v-btn
            outlined
            class="social-btn py-2"
            color="#8B243F"
            height="auto"
            link
            href="https://www.instagram.com/projetoofacaobem/"
            target="_blank"
            >Instagram</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheMap",
});
</script>

<style lang="scss" scoped>
section {
  background-color: $cinza-claro-3;
}

h3 {
  color: $base-5;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.nav-list a {
  color: $cinza-escuro-1;
  font-size: $s12;
  line-height: 1.1;
  display: table;
}

ul li,
.nav-list a:not(:last-child) {
  padding-bottom: 16px;
}

.nav-list .router-link-exact-active {
  color: $base-5;
}

#doar {
  color: $acentuacao-3;
  font-weight: 700;
}

ul li {
  color: $cinza-escuro-1;
  font-size: $s12;
  line-height: 1.1;
}

.social-btn {
  text-transform: none;
}
</style>
