import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Home.vue";
import VaccineHistory from "./views/VaccineHistory.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/vaccine-history", name: "Vaccine History", component: VaccineHistory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
