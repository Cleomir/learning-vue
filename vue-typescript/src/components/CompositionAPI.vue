<template>
  <div>
    <p>Hello, {{ name }}!</p>
    <p>Person: {{ person.name }} {{ person.age }}</p>
    <button @click="changeName">Change name</button>
    <button @click="changePerson">Change person</button>
    <div>
      <span>{{ nameToUpperCase }}</span>
    </div>
    <Props :props="props" />
    <button @click="loadPost">Load Post</button>
    <!-- <ul v-for="(post, index) in posts" :key="index">
      <li>{{ post.title }}</li>
    </ul> -->
    <p>{{ post.title }}</p>
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
  onMounted,
  onUnmounted,
} from "vue";
import axios from "axios";

import Props from "./Props.vue";

export default defineComponent({
  components: { Props },
  setup() {
    // data
    const name = ref("John");
    const person = reactive({ name: "Jane", age: 30 });
    const props = ref([{ name: "Prop1" }, { name: "Prop2" }]);
    const post = ref({});

    // methods
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

    // watchers
    watch(person, () => {
      console.log("Person has changed!");
    });
    watchEffect(() => {
      console.log("Watch effect! ", name);
    });

    //lifecycle hooks
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));

    //async
    const loadPost = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      console.log("Response: ", data);
      post.value = data;
    };

    return {
      name,
      person,
      changeName,
      changePerson,
      nameToUpperCase,
      props,
      loadPost,
      post,
    };
  },
});
</script>
