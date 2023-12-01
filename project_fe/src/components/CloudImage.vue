<template>
  <img style="max-height:500px;max-width:500px" :src="url" alt="">
</template>

<script>
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";

export default {
  props: {
    path: String,
  },
  data() {
    return {
      url: 'https://placehold.co/600x400/png',
    };
  },
  mounted() {
    if (this.path) {
      const storageRef = ref(storage, this.path);
      getDownloadURL(storageRef)
        .then((download_url) => {
          this.url = download_url;
        })
        .catch((error) => {
          console.error("Error getting download URL:", error);
        });
    }
  },
};
</script>
