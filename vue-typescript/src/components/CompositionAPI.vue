<template>
  <div>
    <p>Hello, {{ name }}!</p>
    <button @click="changeName">Change name</button>
    <div>
      <span>{{ nameToUpperCase }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const name = ref("John");
    const changeName = () => {
      name.value = "Doe";
    };
    const nameToUpperCase = computed(() => {
      return name.value.toUpperCase();
    });

    return {
      name,
      changeName,
      nameToUpperCase,
    };
  },
});
</script>
