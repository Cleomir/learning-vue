<template>
  <div>
    <button @click="changeTitle">{{buttonTitle}}</button>
    <ul>
      <li v-for="(name, index) in names" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import {bus} from '../main';

export default {
  data() {
    return {
      buttonTitle: "Change title"
    }
  },
  props: ["names"],
  methods: {
    changeTitle() {
      this.$emit("changeTitle", "new Title");
    },
  },
  created() {
    bus.$on("changeTitle", (data) => this.buttonTitle = data)
  }
};
</script>
