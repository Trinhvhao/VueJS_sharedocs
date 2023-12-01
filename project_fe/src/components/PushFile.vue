<template>
  <div>
    Name <input type="text" v-model="name" placeholder="Enter your name">
    Content <input v-model="content" placeholder="Enter your content">
    Email <input type="text" v-model="email" placeholder="Enter your email">
    File <input type="text" v-model="file" placeholder="Enter your file">
    ID <input type="text" v-model="id" placeholder="Enter your ID">

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
