<template>
  <div>
    ID<input type="text" v-model="id" placeholder="Enter your name">
    Title<input v-model="title" placeholder="Enter your content">
    Description<input type="text" v-model="description" placeholder="Enter your email">
    File<input type="text" v-model="link" placeholder="Enter your file">
    CategoryLink<input type="text" v-model="categoryLink" placeholder="Enter your ID">
    Category<input type="text" v-model="category" placeholder="Enter your ID">
    ImageLink<input type="text" v-model="ImageLink" placeholder="Enter your ID">
  
    <button @click="sendContent">Send Content</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      name: "",
      content: "",
      email: "",
      file: "",
      id: "",
    };
  },

  methods: {
    async sendContent() {
      try {
        const response = await axios.post(
          "https://65661495eb8bb4b70ef2e149.mockapi.io/files",
          {
            name: this.name,
            content: this.content,
            email: this.email,
            file: this.file,
            id: this.id,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Response:", response.data);
        alert("Content sent successfully!");
      } catch (error) {
        console.error("Error:", error);
        alert("Error sending content!");
      }
    },
  },
});
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>
