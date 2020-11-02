<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <Nested @changeTitle="updateTitle($event)" :names="names" />
    <Sibling />
    <Slots>
      <p slot="slot1">Slot content 1</p>
      <p slot="slot2">Slot content 2</p>
    </Slots>
  </div>
</template>

<script>
import Nested from "./Nested";
import Sibling from "./Sibling";
import Slots from "./Slots";

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
    Slots,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
