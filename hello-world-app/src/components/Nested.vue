<template>
  <ul>
    <li v-for="(name, index) in names" :key="index">{{ name }}</li>
  </ul>
</template>

<script>
export default {
  props: ["names"],
};
</script>
