<template>
  <section class="como-ajudar py-16">
    <v-container
      v-for="(sessao, index) in sessoes"
      :key="sessao.titulo"
      :id="index"
    >
      <v-row class="d-flex align-center">
        <v-col class="col-12 col-md-6 coluna-titulo">
          <router-link to="/fale-conosco" class="link">
            <h2
              class="titulo-secao pa-8 mx-auto text-center"
              v-html="sessao.titulo"
            ></h2>
          </router-link>
        </v-col>
        <v-col class="col-12 col-md-6">
          <p class="col-8 mx-auto" v-html="sessao.texto"></p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ComoAjudar",
  data: () => ({
    sessoes: [
      {
        titulo: "Doação Material",
        texto: `O projeto Faça o bem recolhe roupas de frio para acolher os mais necessitados. Temos voluntários
          em diversos bairros de São Paulo e na região do ABC. Você pode levar a sua doação até nós, ou podemos buscar
          na sua casa.`,
      },
      {
        titulo: "Doação Virtual",
        texto: `O projeto Faça o bem recolhe roupas de frio para acolher os mais necessitados. Temos voluntários
          em diversos bairros de São Paulo e na região do ABC. Você pode levar a sua doação até nós, ou podemos buscar
          na sua casa.`,
      },
      {
        titulo: "Seja Voluntário",
        texto: `Sua atitude pode mudar a vida de uma pessoa. Pequenas atitudes, em conjunto, podem mover montanhas.<br>
          Faça parte do nosso projeto.<br>
          Entre em contato conosco, toda ajuda é bem vinda.
          Você pode fazer parte de uma mudança maravilhosa na vida de muita gente.<br>
          Estamos te esperando.`,
      },
    ],
  }),
  computed: {
    isMobile(): boolean {
      return this.$vuetify.breakpoint.mobile;
    },
  },
});
</script>

<style lang="scss" scoped>
.como-ajudar {
  background-color: $cinza-claro-1;

  h2 {
    @media (max-width: 600px) {
      font-size: $s48;
    }
  }

  p {
    font-size: 16px;
    color: $cinza-escuro-1;
  }

  .container:not(:last-child):after {
    @include divider($base-5, $divider-big, 96px auto);
  }

  .container:nth-of-type(even) {
    .coluna-titulo {
      @media (min-width: 1080px) {
        order: 1;
      }
    }
  }
}
</style>
