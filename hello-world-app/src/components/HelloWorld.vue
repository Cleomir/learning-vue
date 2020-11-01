<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <Nested @changeTitle="updateTitle($event)" :names="names" />
    <Sibling />
  </div>
</template>

<script>
import Nested from "./Nested";
import Sibling from "./Sibling";

export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Hello World",
      names: ["Yoshi", "Mario", "Ryu", "John"],
    };
  },
  methods: {
    greeting() {
      return "Learning Vue";
    },
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    },
  },
  components: {
    Nested,
    Sibling,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
