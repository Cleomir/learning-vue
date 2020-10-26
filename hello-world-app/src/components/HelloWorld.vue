<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <Nested />
  </div>
</template>

<script>
import Nested from "./Nested";

export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Hello world",
    };
  },
  methods: {
    greeting() {
      return "Learning Vue";
    },
  },
  components: {
    Nested,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
