<template>
  <div id="app">
    <NavLinks />
    <router-view></router-view>
  </div>
</template>

<script>
import NavLinks from "./components/NavLinks";

export default {
  name: "App",
  components: {
    NavLinks,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
