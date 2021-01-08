<template>
  <div>
    <p>Props:</p>
    <ul v-for="(prop, index) in props" :key="index">
      <li>{{ prop.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["props"],
});
</script>
