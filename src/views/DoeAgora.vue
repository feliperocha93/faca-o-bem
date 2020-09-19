<template>
  <section class="doe-agora py-8">
    <v-container>
      <v-row>
        <v-col>
          <div class="col-8 mx-auto">
            <h2
              class="titulo-secao pa-8 mx-auto text-center"
              v-html="titulo"
            ></h2>
            <p v-html="paragrafo" class="mb-16"></p>
            <v-alert
              v-html="alert"
              type="warning"
              color="#8B243F"
              dismissible
              height="55"
              text
            ></v-alert>
            <v-btn id="btn-lepi" color="#4db055" height="52px">
              Lepi Enxovais
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DoeAgora",
  computed: {
    titulo(): string {
      return `Doe Agora`;
    },
    paragrafo(): string {
      return `Doe um cobertor para o Projeto Faça o Bem. Em parceria com a emprea Lepi Enxovais, todos os produtos
      adquiridos serão direcionados para o Projeto, diretamente para um dos nossos pontos de arrecadação. Basta clicar
      no botão abaixo e usar nosso cupom projetofacaobem.`;
    },
    alert(): string {
      return `Não se esqueça de usar o código do parceiro: <b>projetofacaobem.</b>`;
    },
  },
});
</script>

<style lang="scss" scoped>
h2 {
  &::after {
    @include divider($cinza-claro-1, $divider-big, 8px auto);
  }
  @media (max-width: 600px) {
    font-size: $s48;
  }
}
p {
  font-size: 16px;
  color: $cinza-escuro-1;
}

#btn-lepi {
  @include dosis($cinza-claro-1, $s14);
  text-transform: none;
  width: 100%;
}
</style>
