import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import GetPlanets from "../views/Planets/GetPlanets.vue";
import GetCharacters from "../views/Characters/GetCharacters.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/planets",
    name: "planets",
    component: GetPlanets,
  },
  {
    path: "/characters",
    name: "characters",
    component: GetCharacters,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
