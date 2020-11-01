<template>
  <button @click="changeTitle">Change sibling title</button>
</template>

<script>
import { bus } from "../main";

export default {
  methods: {
    changeTitle() {
      bus.$emit("changeTitle", "Title from Sibling");
    },
  },
};
</script>
