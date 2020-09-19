<template>
  <div>
    <section class="banner text-center py-16">
      <h2>Projeto Faça o Bem</h2>
      <p>
        Ajude-nos a ajudar alguém, <br />
        juntos somos mais fortes.
      </p>
      <span
        >Saiba
        <router-link to="/como-ajudar" class="link">como ajudar</router-link
        >.</span
      >
    </section>

    <section class="introducao py-16">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-row no-gutters>
              <v-col cols="9" class="mx-auto">
                <h3>Quem somos</h3>
                <p>
                  Um grupo de pessoas que, tendo em vista a realidade das ruas,
                  criou um movimento a fim de que se solidarizar e mudar um
                  pouco a realidade das pessoas mais necessitadas. Somos um
                  projeto sem fins lucrativos, com o intuito apenas de fazer o
                  bem.
                </p>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="4" class="mt-8 mt-sm-8">
            <v-row no-gutters>
              <v-col cols="9" class="mx-auto">
                <h3>O que fazemos</h3>
                <p>
                  Visitamos diversos pontos periféricos e de moradores de rua na
                  capital de São Paulo, entendendo primeiramente o que essas
                  pessoas precisam de mais urgente, para assim organizar doações
                  e posteriormente a distribuição de tudo que foi adquirido.
                </p>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" sm="4" class="mt-8 mt-sm-16">
            <v-row no-gutters>
              <v-col cols="9" class="mx-auto">
                <h3>Recebemos</h3>
                <p>
                  Para quem não tem nada, tudo é muito. Então, aceitamos roupas,
                  cobertores, luvas, calçados e touca Ale disso, fazemos algumas
                  doações de marmita, nessas a arrecadação é diferente, fique de
                  olho nas redes sociais.
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="parceiros py-16">
      <v-container>
        <v-row class="justify-center flex-column text-center">
          <h2 class="titulo-secao">Nossos Parceiros</h2>
          <div class="pa-4">
            <img
              :src="require('@/assets/parceiros-faca-o-bem.jpeg')"
              class="mx-auto"
            />
          </div>
        </v-row>
      </v-container>
    </section>

    <section class="depoimentos">
      <v-container>
        <v-row>
          <v-col cols="12" md="7" class="depoimentos-carrossel pa-4">
            <v-carousel
              cycle
              height="400"
              hide-delimiter-background
              show-arrows-on-hover
            >
              <v-carousel-item>
                <v-sheet color="#F5EBEF" height="100%">
                  <v-row
                    class="fill-height d-flex flex-column"
                    align="center"
                    justify="center"
                  >
                    <img
                      :src="require('@/assets/voluntario-faca-o-bem.jpg')"
                      alt="Doador"
                      class="mx-auto"
                    />
                    <h4>Matheus Alves, 23 anos.</h4>
                    <p>
                      “Nada melhor do que poder ajudar ao próximo. É uma
                      sensação maravilhosa, todos deveriam experimentar”
                    </p>
                  </v-row>
                </v-sheet>
              </v-carousel-item>

              <v-carousel-item>
                <v-sheet color="#F5EBEF" height="100%">
                  <v-row
                    class="fill-height d-flex flex-column"
                    align="center"
                    justify="center"
                  >
                    <img
                      :src="require('@/assets/voluntario-faca-o-bem.jpg')"
                      alt="Doador"
                      class="mx-auto"
                    />
                    <h4>Fernando Bet, pedreiro.</h4>
                    <p>
                      “Nada melhor do que poder ajudar ao próximo. É uma
                      sensação maravilhosa, todos deveriam experimentar”
                    </p>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col
            cols="12"
            md="5"
            class="d-flex flex-column justify-space-between justify-md-center align-center depoimentos-depoimentos py-8"
          >
            <h3 class="text-center my-2 my-md-0">Depoimentos</h3>
            <p class="col-6 my-2 my-md-0">
              Qualquer um pode ajudar, e toda ajuda é bem-vinda! Você não
              precisa se identificar, a menos que queira. Junte-se a nossa
              causa.
            </p>
            <v-btn color="#4db055" height="32px" class="my-2 my-md-0"
              >Doe agora</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
});
</script>

<style lang="scss" scoped>
.banner {
  background: url("../assets/banner-faca-o-bem.jpg");

  h2 {
    @include dosis($cinza-claro-1, $s72);
    @media (max-width: 600px) {
      font-size: $s48;
    }
    &:after {
      @include divider($cinza-claro-1, $divider-big, 16px auto);
    }
  }

  span,
  p {
    color: $cinza-claro-1;
    font-size: $s18;
    font-weight: 300;
  }
}

.introducao {
  background-color: $cinza-claro-1;

  h3 {
    @include dosis($cinza-escuro-2, $s36);
    line-height: 1;
    &:after {
      @include divider($cinza-claro-3, $divider-big, 8px 0);
    }
  }

  p {
    color: $cinza-escuro-1;
    font-size: $s14;
  }
}

.parceiros {
  h2 {
    &:after {
      @include divider($cinza-claro-3, $divider-big, 16px auto);
      @media (max-width: 600px) {
        font-size: 48px;
      }
    }
  }
}

.depoimentos {
  background: $cinza-claro-1;

  .depoimentos-carrossel {
    img {
      border-radius: 50%;
      max-width: 192px;
      margin-bottom: 32px;
    }

    h4 {
      color: $base-5;
      font-weight: bold;
      margin-bottom: 8px;
    }

    p {
      color: $cinza-escuro-1;
      font-size: $s14;
      max-width: 600px;
      width: 80%;
      margin-bottom: 8px;
      text-align: center;
    }
  }

  .depoimentos-depoimentos {
    background-color: $base-5;

    h3 {
      @include dosis($cinza-claro-1, $s24);
      &:after {
        @include divider($cinza-claro-1, $divider-medium, 8px 0);
      }
    }

    p {
      color: $cinza-claro-1;
      font-weight: 300;
    }

    button {
      text-transform: none;
      color: $cinza-claro-1;
      font-weight: 300;
    }
  }
}
</style>
