<template>
  <nav>
    <ul>
      <li><router-link to="/hello" exact>Hello World</router-link></li>
      <li><router-link to="/lifecycle" exact>Lifecycle Hooks</router-link></li>
      <li><router-link to="/form-binding" exact>Form Binding</router-link></li>
      <li>
        <router-link to="/custom-directive">Custom Directives</router-link>
      </li>
      <li>
        <router-link to="/route-params/10">Route Params</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}

nav {
  background-color: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}

.router-link-active {
    background-color: #eee;
    color: #444;
}
</style>
