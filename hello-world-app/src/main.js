import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";
import LifecycleHooks from "./components/LifecycleHooks.vue";
import FormBinding from "./components/FormBinding.vue";
import CustomDirective from "./components/CustomDirective.vue";
import RouteParams from "./components/RouteParams.vue";

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

Vue.filter("toUpperCase", (value) => {
  return value.toUpperCase();
});

const routes = [
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
  {
    path: "/route-params/:id",
    component: RouteParams,
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

export const bus = new Vue();
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
