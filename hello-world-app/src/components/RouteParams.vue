<template>
  <h1>Blog id {{ id }}</h1>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
