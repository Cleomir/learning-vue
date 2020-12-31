<template>
  <div class="home">
    <Interpolation />
  </div>
</template>

<script lang="ts">
import Interpolation from "@/components/Interpolation.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Interpolation,
  },
});
</script>
