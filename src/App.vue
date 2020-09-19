<template>
  <v-app id="app-vue">
    <TheHeader />
    <main id="main-vue">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <TheMap />
    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMap from "@/components/TheMap.vue";
import TheFooter from "@/components/TheFooter.vue";

export default Vue.extend({
  name: "App",
  components: {
    TheHeader,
    TheMap,
    TheFooter,
  },
  created() {
    document.title = "Projeto Faça o Bem";
  },
});
</script>

<style lang="scss">
#app-vue {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main-vue {
  flex: 1;
}
</style>
