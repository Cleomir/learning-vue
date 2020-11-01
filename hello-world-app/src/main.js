import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Nested from "./components/Nested.vue";
import HelloWorld from "./components/HelloWorld.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

export const bus = new Vue();
const routes = [
  {
    path: "/",
    component: Nested,
  },
  {
    path: "/hello",
    component: HelloWorld,
  },
];
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
