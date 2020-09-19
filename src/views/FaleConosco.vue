<template>
  <div>
    <section class="doe-agora py-8">
      <v-container>
        <v-row>
          <v-col>
            <div class="col-8 mx-auto">
              <h2 class="titulo-secao pa-8 mx-auto text-center">
                Fale Conosco
              </h2>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="nome"
                  label="Nome"
                  placeholder="Seu nome"
                  color="#8B243F"
                  outlined
                  :rules="[required]"
                ></v-text-field>
                <v-text-field
                  v-model="contato"
                  label="Contato"
                  placeholder="E-mail ou Telefone"
                  color="#8B243F"
                  outlined
                  :rules="[required]"
                ></v-text-field>
                <v-text-field
                  v-model="mensagem"
                  label="Mensagem"
                  placeholder="Escreva sua mensagem aqui"
                  color="#8B243F"
                  outlined
                  :rules="[required]"
                ></v-text-field>
                <v-btn
                  @click="enviar"
                  color="#4db055"
                  height="32px"
                  class="my-2 my-md-0"
                  id="btn-enviar"
                  >Enviar</v-btn
                >
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VForm } from "@/main";

export default Vue.extend({
  name: "FaleConosco",
  data: () => ({
    nome: String(),
    contato: String(),
    mensagem: String(),
    valid: true,
  }),
  computed: {
    form(): VForm {
      return this.$refs.form as VForm;
    },
  },
  methods: {
    enviar() {
      if (this.form.validate()) {
        alert("formulário enviado");
      }
    },
    required(value: string): boolean | string {
      return value.length > 3 || "Campo obrigatório";
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

#btn-enviar {
  @include dosis($cinza-claro-1, $s14);
  text-transform: none;
  width: 100%;
}
</style>
