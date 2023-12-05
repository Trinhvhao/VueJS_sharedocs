<template>
  <div id="app" class="container mt-5">
    <div class="header">
      <p>Let Upload Document And Share It with Everyone</p>
    </div>
    <div class="col">
      <label for="myfile" class="file-upload-label">
        <div class="file-upload-design">
          <i class="icon fa-solid fa-upload"></i>
          <p>Drag and Drop</p>
          <p>or</p>
          <span class="btn-primary">Browse file</span>
          <div class="upload_input mb-3">
            <input
              type="file"
              ref="myfile"
              id="myfile"
              @change="handleFileChange"
              multiple
            />
          </div>
        </div>
      </label>
      <div style="margin-top: 24px">
        <button @click="upload" class="button-upload">
          {{ filesSelected ? `Upload ${filesSelected} Files` : "Upload" }}
        </button>
      </div>

      <div v-if="uploadedFileNames.length > 0" class="file-uploaded mt-3">
        <p>Uploaded Files:</p>
        <ul>
          <li v-for="(fileName, index) in uploadedFileNames" :key="index">
            {{ fileName }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

export default {
  data() {
    return {
      uploadedFileNames: [],
      filesSelected: 0,
    };
  },
  methods: {
    upload() {
      const fileInput = this.$refs.myfile;
      const files = fileInput.files;

      // Kiểm tra xem có ít nhất một file được chọn
      if (files.length > 0) {
        this.filesSelected = files.length; // Set the number of files selected
        // Tham chiếu đến thư mục trên firebase storage
        const storageRef = ref(storage, "folder/"); // You can use a specific folder or remove it for root storage
        const promises = [];

        // Upload each file and collect promises
        for (const file of files) {
          const fileRef = ref(storageRef, file.name);
          promises.push(uploadBytes(fileRef, file));
        }

        // Wait for all uploads to complete
        Promise.all(promises)
          .then((snapshots) => {
            console.log("Uploaded successfully:", snapshots);
            // Extract file names from snapshots and add to uploadedFileNames
            const uploadedNames = snapshots.map(
              (snapshot) => snapshot.metadata.name
            );
            this.uploadedFileNames =
              this.uploadedFileNames.concat(uploadedNames);
          })
          .catch((error) => {
            console.error("Error uploading:", error.message);
          });
      } else {
        alert("No file selected for upload.");
      }
    },
    handleFileChange() {
      // You can update the file names as files are selected (optional)
      const fileInput = this.$refs.myfile;
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const newFileNames = Array.from(fileInput.files).map(
          (file) => file.name
        );
        this.filesSelected = fileInput.files.length;
      } else {
        this.filesSelected = 0;
      }
    },
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: 60px;
}
.header p {
  font-size: 2rem;
  text-transform: uppercase;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  line-height: 1.6rem;
  text-shadow: 0 0 5px rgb(23 255 250 / 80%), 0 0 10px rgb(51 240 255 / 80%);
}
.header {
  padding-top: 24px;
  transition: all 0.2s;
}
.header:hover {
  scale: 1.1;
}
.icon {
  font-size: 4rem;
}
.file-upload-label input {
  display: none;
}
.file-upload-label svg {
  height: 50px;
  fill: rgb(82, 82, 82);
  margin-bottom: 20px;
}
.button-upload {
  appearance: none;
  background-color: transparent;
  border-radius: 0.975rem;
  box-sizing: border-box;
  color: #3b3b3b;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  min-height: 3.75em;
  min-width: 0;
  padding: 1em 2.3em;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
}
.button-upload:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
}
button:hover {
  color: #fff;
  background-color: #1a1a1a;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}
button:active {
  box-shadow: none;
  transform: translateY(0);
}

.file-upload-design {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.file-upload-design p {
  color: white;
  font-size: 1.4rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.col {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.btn-primary {
  width: 8rem;
  height: 2.4rem;
  background: black;
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 20px;
  padding: 5px 15px;
}
.btn-primary:hover {
  color: black;
}
.btn-primary::after {
  content: "";
  background: white;
  position: absolute;
  z-index: -1;
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
  transition: all 0.5s;
}
.btn-primary:hover:after {
  transform: skewX(-45deg) scale(1, 1);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.file-upload-label {
  padding: 30px 70px;
  border-radius: 9px;
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 40px;
  border: 2px dashed rgb(82, 82, 82);
  background-color: rgb(184 216 216);
}

.file-upload-label:hover {
  box-shadow: 7px 5px 56px -14px #00d9d9;
}

.file-upload-label:active {
  transform: scale(0.97);
  box-shadow: 7px 5px 56px -10px #00cbd9;
}
.file-uploaded p, li{
  color: black;
}
</style>

