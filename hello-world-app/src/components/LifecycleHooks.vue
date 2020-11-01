<template>
  <div>
    <H1>{{ title }}</H1>
    <button @click="changeTitle">Change title</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Lifecycle hooks",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Updated title";
    },
  },
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  },
};
</script>
