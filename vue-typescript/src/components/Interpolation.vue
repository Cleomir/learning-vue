<template>
  <div>{{ name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const name = "Cleomir";

    return {
      name,
    };
  },
});
</script>
