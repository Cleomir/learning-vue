import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Nested from "./components/Nested.vue";
import HelloWorld from "./components/HelloWorld.vue";
import LifecycleHooks from "./components/LifecycleHooks.vue";
import FormBinding from "./components/FormBinding.vue";
import CustomDirective from "./components/CustomDirective.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "560px";
    }

    if (binding.arg === "gray") {
      el.style.backgroundColor = "#ddd";
    }
  },
});

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
  {
    path: "/custom-directive",
    component: CustomDirective,
  },
];
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
