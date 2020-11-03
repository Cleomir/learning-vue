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
    <component :is="component" />
    <button @click="setDynamicComponent1">Set dynamic component 1</button>
    <button @click="setDynamicComponent2">Set dynamic component 2</button>
  </div>
</template>

<script>
import Nested from "./Nested";
import Sibling from "./Sibling";
import Slots from "./Slots";
import Dynamic1 from "./Dynamic1";
import Dynamic2 from "./Dynamic2";

export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Hello World",
      names: ["Yoshi", "Mario", "Ryu", "John"],
      component: "Dynamic2",
    };
  },
  methods: {
    greeting() {
      return "Learning Vue";
    },
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    },
    setDynamicComponent1() {
      this.component = "Dynamic1";
    },
    setDynamicComponent2() {
      this.component = "Dynamic2";
    },
  },
  components: {
    Nested,
    Sibling,
    Slots,
    Dynamic1,
    Dynamic2,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
