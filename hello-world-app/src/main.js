import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Nested from "./components/Nested.vue";
import HelloWorld from "./components/HelloWorld.vue";
import LifecycleHooks from "./components/LifecycleHooks.vue";
import FormBinding from "./components/FormBinding.vue";

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
  {
    path: "/lifecycle",
    component: LifecycleHooks,
  },
  {
    path: "/form-binding",
    component: FormBinding,
  },
];
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
