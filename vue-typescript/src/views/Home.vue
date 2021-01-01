<template>
  <div class="home">
    <CompositionAPI />
  </div>
</template>

<script lang="ts">
import CompositionAPI from "@/components/CompositionAPI.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    CompositionAPI,
  },
});
</script>
