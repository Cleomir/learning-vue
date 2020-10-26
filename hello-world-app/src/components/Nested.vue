<template>
  <ul>
    <li v-for="(name, index) in names" :key="index">{{ name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      names: ["Yoshi", "Mario", "Ryu"],
    };
  },
};
</script>
