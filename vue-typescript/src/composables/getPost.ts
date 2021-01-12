import axios from "axios";
import { ref } from "vue";

const getPost = () => {
  const post = ref(null);
  const errorMessage = ref(null);

  const loadPost = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      console.log("Response: ", data);
      post.value = data;
    } catch (error) {
      errorMessage.value = error.message;
      console.log(error);
    }
  };

  return { post, errorMessage, loadPost };
};

export default getPost;
