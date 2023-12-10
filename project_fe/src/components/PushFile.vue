<template>
  <div class="input-post">
    <div class="header">Create a post with your shared documents</div>
    <div class="card">
      <div class="input-field col-xl-6 col-lg-6 col-md-12 col-12">
        <input v-model="title" placeholder="Enter your content" required />
        <span class="span" for="input">Title</span>
      </div>
      <div class="input-field col-xl-6 col-lg-6 col-md-12 col-12">
        <input
          type="text"
          v-model="description"
          placeholder="Enter your description"
          required
        />
        <span class="span" for="input">Description</span>
      </div>
      <div class="input-field col-xl-6 col-lg-6 col-md-12 col-12">
        <input
          type="text"
          v-model="file"
          placeholder="Enter your file"
          required
        />
        <span class="span" for="input">File</span>
      </div>
      <div class="input-field col-xl-6 col-lg-6 col-md-12 col-12">
        <input
          type="text"
          v-model="categorylink"
          placeholder="Enter your category link"
          required
        />
        <span class="span" for="input">CategoryLink</span>
      </div>

      <div class="input-field col-xl-6 col-lg-6 col-md-12 col-12">
        <input
          type="text"
          v-model="category"
          placeholder="Enter your category"
          required
        />
        <span class="span" for="input">Category</span>
      </div>

      <div class="input-field col-xl-6 col-lg-6 col-md-12 col-12">
        <input
          type="text"
          v-model="imageLink"
          placeholder="Enter your image link"
          required
        /><span class="span" for="input">ImageLink</span>
      </div>

      <button @click="sendContent" :disabled="!isFormValid">Create Post</button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      title: "",
      description: "",
      file: "",
      categorylink: "",
      category: "",
      imageLink: "",
    };
  },
  computed: {
    // Kiểm tra xem tất cả các trường cần thiết để tạo một bài đang mới đã được điền đầy đủ hay không
    // Cụ thể xem các trường dữ liệu có giá trị hay không ( không phải là null, undefined, "", hoặc 0)
    isFormValid() {
      return (
        this.title &&
        this.description &&
        this.file &&
        this.category &&
        this.categorylink &&
        this.imageLink
      );
    },
  },

  methods: {
    async sendContent() {
      if (!this.isFormValid) {
        alert("Please fill in all the required fields.");
        return;
      }
      try {
        const response = await axios.post(
          "https://65661495eb8bb4b70ef2e149.mockapi.io/files",
          {
            title: this.title,
            category: this.category,
            categorylink: this.categorylink,
            link: this.file,
            imagelink: this.imageLink,
            description: this.description,
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
.header {
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: 2rem;
  margin-top: 1.5em;
  text-align: center;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin: auto;
  border-radius: 15px;
  background: #e3e3e3;
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
}
.input-field {
  padding-top: 24px;
  position: relative;
}
.input-field input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  color: #000;
  font-size: 1em;
  background: transparent;
  border-left: 2px solid #000;
  border-bottom: 2px solid #000;
  transition: 0.1s;
  border-bottom-left-radius: 8px;
}
span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-4px);
  margin-left: 10px;
  padding: 0% 10px;
  pointer-events: none;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  letter-spacing: 3px;
  border-radius: 8px;
  display: none;
}
.input-field input:valid ~ span,
.input-field input:focus ~ span {
  display: inline;
  transform: translateY(-25px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #000;
  letter-spacing: 0.2em;
  color: #fff;
  border: 2px;
}

.input-field input:focus,
.input-field input:valid {
  border: 2px solid #000;
  border-radius: 8px;
}

input {
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
}

button {
  color: rgb(0, 0, 0);
  padding: 10px 15px;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
button:hover {
  scale: 1.1;
}
.input-post {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 48px;
}
</style>
