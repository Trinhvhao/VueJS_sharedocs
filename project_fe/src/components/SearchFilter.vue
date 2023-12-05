<template>
  <div class="card-container">
    <input
      class="search"
      type="text"
      v-model="searchQuery"
      placeholder="Enter your search query"
    />
    <div v-if="filteredItems.length > 0" class="grid-container">
      <div v-for="item in filteredItems" :key="item.id" class="card p-2">
        <!-- Content of each card -->
        <div class="card-body">
          <div class="card-img">
            <img :src="item.imagelink" :alt="item.alt" />
          </div>
          <div class="card-actions">
            <button id="card-botton1">
              <strong
                ><a
                  class="card-link p-2"
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer">
                  View
                  <i class="fa-solid fa-eye"></i>
              </a></strong>
            </button>
            <button class="card-button2" @click="downloadItem(item.link)">
              Download
              <i class="fa-solid fa-download"></i>
            </button>
          </div>
          <a class="card-link" :href="item.categoryLink">
            <div class="card-content">{{ item.category }}</div>
          </a>
          <a class="card-link" :href="item.link">
            <div class="card-header">{{ item.title }}</div>
            <div class="card-title">{{ item.description }}</div>
          </a>
        </div>
      </div>
    </div>
    <div v-else class="no-results-message">No matching items found.</div>
  </div>
</template>

<script>
import axios from "axios";
import { saveAs } from "file-saver";
import { storage } from "../firebase"; // Thay đổi đường dẫn tới file firebase.js của bạn
import { ref, getDownloadURL } from "firebase/storage";
export default {
  methods: {
    downloadItem(item) {
      console.log("item.link:", item.link);
      const fileRef = ref(storage, item.link);
      getDownloadURL(fileRef)
        .then((downloadUrl) => {
          axios
            .get(downloadUrl, { responseType: "blob" })
            .then((response) => {
              const blob = new Blob([response.data], {
                type: "application/pdf",
              });
              saveAs(blob, item.title);
            })
            .catch((error) => {
              console.error("Error:", error.message);
            });
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    },
  },
  data() {
    return {
      searchQuery: "",
      items: [],
    };
  },
  mounted() {
    // Replace the URL with your Mock API endpoint
    const apiUrl = "https://65661495eb8bb4b70ef2e149.mockapi.io/files";
    axios
      .get(apiUrl)
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        return (
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      });
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
.card-container {
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  text-align: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.search {
  padding: 5px;
  font-size: 1.2rem;
  border: 2px solid rgb(20 33 210);
  border-radius: 20px;
  width: 60%;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
}
.search:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.7);
}
.search:hover {
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
}
.card {
  border: none;
}

.card-body {
  padding: 0;
}
.card-title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
}
.card-img {
  overflow: hidden;
  height: 162px;
  padding-bottom: 12px;
}
.card-button2 {
  background-color: #a4e3ce;
  margin-left: 5px;
  color: white;
  border-radius: 10px;
  border: 2px solid #3498db;
  transition: all 0.2s ease-in;
}
.card-button2:hover {
  background-color: rgb(62, 144, 220);
  scale: 1.05;
}
.card-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
#card-botton1 {
  margin-right: 5px;
  border-radius: 9px;
  background: #c2d5d4;
  border: none;
  font-family: inherit;
  text-align: center;
  transition: 0.4s;
}
#card-botton1:hover {
  box-shadow: 7px 5px 56px -14px #00d9d2;
}
#card-botton1:active {
  transform: scale(0.97);
  box-shadow: 7px 5px 56px -10px #c3d900;
}
a {
  text-decoration: none;
}

.card-header {
  color: rgb(36, 136, 207);
  font-weight: bold;
  padding: 0;
}

.card-title {
  color: rgb(0 0 0 / 60%);
  font-size: 1rem;
}

.card-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(138, 40, 45);
  padding-bottom: 6px;
  text-transform: uppercase;
  padding-top: 8px;
}
.card:hover {
  transform: scale(1.05); /* Phóng to thẻ khi di chuột vào */
  transition: all 0.3s ease-in-out;
  background-color: azure;
}
</style>
