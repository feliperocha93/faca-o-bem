<template>
  <div>
    <section class="introducao py-16" id="introducao">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="introducao-img">
              <img
                :src="require('@/assets/projeto-faca-o-bem-128.png')"
                width="128"
              />
            </div>
          </v-col>
          <v-col cols="10" md="6" class="mx-auto">
            <p class="mb-4">
              Sabemos que a desigualdade social assola nosso dia a dia, e que
              sempre temos a chance de estender a mão para ajudar o próximo.
            </p>
            <p class="mb-4">
              O Projeto <b color="">Faça o bem</b> tem o intuito de arrecadar e
              doar roupas, agasalhos e cobertores, sendo aberto a novas
              possibilidades e projetos específicos.
            </p>
            <p>
              Enquanto não é possível salvar o mundo, vamos salvar um vizinho de
              rua, um necessitado que está longe dos olhos de muitos.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="nosso-time py-16" id="nosso-time">
      <v-container>
        <v-row>
          <h2 class="titulo-secao mx-auto mb-8">Nosso Time</h2>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <div class="text-center mb-8 mb-md-0">
              <img
                :src="require('@/assets/voluntario-faca-o-bem.jpg')"
                alt="Doador"
                class="mx-auto"
                width="192"
              />
              <h4 class="mt-4 mb-n2">Matheus Alves</h4>
              <span>São Bernardo do Campo</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-center mb-8 mb-md-0">
              <img
                :src="require('@/assets/voluntario-faca-o-bem.jpg')"
                alt="Doador"
                class="mx-auto"
                width="192"
              />
              <h4 class="mt-4 mb-n2">Matheus Alves</h4>
              <span>São Bernardo do Campo</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="text-center">
              <img
                :src="require('@/assets/voluntario-faca-o-bem.jpg')"
                alt="Doador"
                class="mx-auto"
                width="192"
              />
              <h4 class="mt-4 mb-n2">Matheus Alves</h4>
              <span>São Bernardo do Campo</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sobre",
});
</script>

<style lang="scss" scoped>
.introducao {
  background-color: #f5ebef;

  p {
    color: $cinza-escuro-1;
    font-size: $s18;
    font-weight: 300;
  }

  b {
    color: $base-5;
  }

  .introducao-img {
    img {
      margin: 0 auto;
    }
    &::after {
      @include divider($cinza-claro-3, $divider-big, 32px auto);
    }
  }
}

.nosso-time {
  h2 {
    &:after {
      @include divider($cinza-claro-3, $divider-big, 16px auto);
      @media (max-width: 600px) {
        font-size: 48px;
      }
    }
  }

  h4 {
    font-size: 18px;
    color: $cinza-escuro-3;
  }

  span {
    font-size: 14px;
    color: $cinza-escuro-1;
  }
}
</style>
