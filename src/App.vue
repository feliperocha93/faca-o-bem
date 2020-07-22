<template>
  <div style="text-align: center;">
    <img src="@/assets/projeto-faca-o-bem-64.png" alt="Logo" />
    <h1>Projeto Faça o Bem</h1>
    <p>
      Estamos ajustando os últimos detalhes para colocar nosso site no ar.
    </p>
    <p>
      Fale conosco pela nossa página no
      <a
        href="https://www.facebook.com/projetoofacaobem/"
        alt="Projeto Faça o Bem"
        >Facebook</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  created() {
    document.title = "Projeto Faça o Bem";
  },
});
</script>

<style lang="scss">
body {
  background-color: #f5ebef;
  color: #847073;
  font-family: "Roboto", sans-serif;
  margin: 100px;
}

h1 {
  color: #8b243f;
  font-family: "Dosis", sans-serif;
  margin-bottom: 20px;
}

a {
  color: #4db055;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #8b243f;
}
</style>
