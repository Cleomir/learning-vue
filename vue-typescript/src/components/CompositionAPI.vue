<template>
  <div>
    <p>Hello, {{ name }}!</p>
    <p>Person: {{ person.name }} {{ person.age }}</p>
    <button @click="changeName">Change name</button>
    <button @click="changePerson">Change person</button>
    <div>
      <span>{{ nameToUpperCase }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  reactive,
  watch,
  watchEffect,
} from "vue";

export default defineComponent({
  setup() {
    const name = ref("John");
    const person = reactive({ name: "Jane", age: 30 });

    const changeName = () => {
      name.value = "Doe";
    };

    const changePerson = () => {
      person.name = "Daisy";
      person.age = 18;
    };

    const nameToUpperCase = computed(() => {
      return name.value.toUpperCase();
    });

    watch(person, () => {
      console.log("Person has changed!");
    });

    watchEffect(() => {
      console.log("Watch effect! ", name);
    });

    return {
      name,
      person,
      changeName,
      changePerson,
      nameToUpperCase,
    };
  },
});
</script>
