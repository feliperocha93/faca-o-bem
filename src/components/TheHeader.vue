<template>
  <header>
    <v-container class="d-flex py-4 px-2 px-md-0 justify-space-between">
      <v-col class="d-flex align-center">
        <router-link to="/">
          <img
            :src="require('@/assets/projeto-faca-o-bem-32.png')"
            alt="Logo Projeto Faça o Bem"
            class="mr-2"
          />
        </router-link>
        <router-link to="/">
          <h1>Projeto Faça o Bem</h1>
        </router-link>
      </v-col>

      <div v-if="isMobile">
        <v-btn @click.stop="drawer = !drawer" color="#e7cad4" elevation="0">
          <v-icon color="#8b243f">
            mdi-menu
          </v-icon>
        </v-btn>

        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list-item>
            <v-list-item-avatar>
              <v-img
                :src="require('@/assets/projeto-faca-o-bem-32.png')"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <router-link to="/">
                <h1>Projeto Faça o Bem</h1>
              </router-link>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list class="nav-list" dense>
            <v-list-item v-for="item in menuItems" :key="item.title" link>
              <v-list-item-content>
                <router-link :to="item.path">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <router-link to="/doe-agora"
                  ><v-btn id="btn-doar" color="#4db055" height="32px"
                    >Doe Agora</v-btn
                  ></router-link
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>

      <div v-else>
        <v-col class="d-md-flex align-center">
          <nav class="ml-auto nav-list d-flex align-center">
            <router-link to="/sobre">Sobre</router-link>
            <router-link to="/como-ajudar">Como ajudar</router-link>
            <router-link to="/fale-conosco">Fale Conosco</router-link>
            <router-link to="/doe-agora"
              ><v-btn id="btn-doar" color="#4db055" height="32px"
                >Doe Agora</v-btn
              ></router-link
            >
          </nav>
        </v-col>
      </div>
    </v-container>
  </header>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheHeader",
  data: () => ({
    drawer: null,
    menuItems: [
      { title: "Sobre", path: "/sobre" },
      { title: "Como ajudar", path: "/como-ajudar" },
      { title: "Fale Conosco", path: "/fale-conosco" }
    ]
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.sm;
    }
  }
});
</script>

<style lang="scss" scoped>
header {
  background: $cinza-claro-3;
}

h1 {
  @include dosis($base-5, $s18);
}

.nav-list a {
  @include dosis($cinza-escuro-2, $s18);
  padding: 0 16px;
}

.nav-list .router-link-exact-active {
  color: $base-5;
}

#btn-doar {
  @include dosis($cinza-claro-1, $s14);
  text-transform: none;
}
</style>
