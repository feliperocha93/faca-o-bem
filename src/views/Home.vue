<template>
  <section class="banner">
    <h2>Projeto Faça o Bem</h2>
    <p>
      Ajude-nos a ajudar alguém, <br />
      juntos somos mais fortes
    </p>
    <span
      >Saiba <router-link to="/" class="link">como ajudar</router-link></span
    >
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home"
});
</script>

<style lang="scss" scoped>
.banner {
  background: url("../assets/banner-faca-o-bem.jpg");
}
</style>
