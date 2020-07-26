import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Sobre from "../views/Sobre.vue";
import ComoAjudar from "../views/ComoAjudar.vue";
import FaleConosco from "../views/FaleConosco.vue";
import DoeAgora from "../views/DoeAgora.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: Sobre,
  },
  {
    path: "/como-ajudar",
    name: "como-ajudar",
    component: ComoAjudar,
  },
  {
    path: "/fale-conosco",
    name: "fale-conosco",
    component: FaleConosco,
  },
  {
    path: "/doe-agora",
    name: "doe-agora",
    component: DoeAgora,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
