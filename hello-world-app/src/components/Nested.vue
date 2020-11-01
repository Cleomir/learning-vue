<template>
  <div>
    <button @click="changeTitle">Change title</button>
    <ul>
      <li v-for="(name, index) in names" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["names"],
  methods: {
    changeTitle() {
      this.$emit("changeTitle", "new Title");
    },
  },
};
</script>
