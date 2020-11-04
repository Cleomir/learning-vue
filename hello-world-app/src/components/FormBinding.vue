<template>
  <div id="add-blog">
    <h2>Blog Post</h2>
    <form>
      <label>Blog Title</label>
      <input type="text" v-model.lazy="blog.title" />
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
    </form>
    <div id="checkbox">
      <label>Angular</label>
      <input type="checkbox" value="Angular" v-model="blog.categories" />
      <label>React</label>
      <input type="checkbox" value="React" v-model="blog.categories" />
      <label>Vue</label>
      <input type="checkbox" value="Vue" v-model="blog.categories" />
    </div>
    <label>Names:</label>
    <select v-model="blog.author">
      <option v-for="(author, index) in authors" :key="index">{{
        author
      }}</option>
    </select>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content: {{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="(category, index) in blog.categories" :key="index">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["John", "Jane", "Foo"],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#checkbox {
  display: inline-block;
  margin-right: 10px;
}

#checkbox label {
  display: inline-block;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}
</style>
