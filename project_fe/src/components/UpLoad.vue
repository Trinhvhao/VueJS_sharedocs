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
        <!-- Thêm sự kiện @click để kích hoạt quá trình tải lên -->
        <button @click="upload" class="button-upload">
          {{ filesSelected ? `Upload ${filesSelected} Files` : "Upload" }}
        </button>
      </div>
      <!-- Bao quanh phần hiển thị tệp tin và thanh tiến trình -->
      <div v-if="uploadedFileNames.length > 0 || uploadedFileURLs.length > 0 || uploading" class="file-uploaded mt-3">
        <!-- Hiển thị thanh tiến trình khi uploading là true -->
        <div v-if="uploading" class="progress col-xl-6 col-md-10">
          <div class="progress-bar" :style="{ width: `${uploadProgress}%` }"></div>
        </div>
        <ul style="margin: 0; padding: 0">
          <li v-for="(file, index) in uploadedFileNames" :key="index">
            <div class="file-info col-xl-6 col-sm-12">
              <div class="file-image">
                <i class="icon fa-solid fa-file-word"></i>
              </div>
              <div class="file-content">
                <div class="file-name col-12">{{ file }}</div>
                <div class="file-url col-md-12">
                  <a :href="uploadedFileURLs[index]" target="_blank">Link To File</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

export default {
  data() {
    return {
      uploadedFileNames: [],
      uploadedFileURLs: [],
      filesSelected: 0,
      uploadProgress: 0,
      uploading: false, // Biến để kiểm tra xem quá trình tải lên đang diễn ra hay không
    };
  },
  methods: {
    async upload() {
      // Đặt giá trị ban đầu cho quá trình tải lên
      this.uploading = true;
      this.uploadProgress = 0;
      
      const fileInput = this.$refs.myfile;
      const files = fileInput.files;

      if (files.length > 0) {
        this.filesSelected = files.length;
        const storageRef = ref(storage, "folder/");
        const promises = [];

        for (const file of files) {
          const fileRef = ref(storageRef, file.name);
          const uploadTask = uploadBytesResumable(fileRef, file);
          
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              this.uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
              console.error("Error during upload:", error.message);
              this.uploading = false; // Đặt giá trị false nếu có lỗi
            }
          );
          
          promises.push(uploadBytes(fileRef, file));
        }

        try {
          const snapshots = await Promise.all(promises);
          const downloadURLs = await Promise.all(
            snapshots.map(async (snapshot) => await getDownloadURL(snapshot.ref))
          );

          const uploadedData = snapshots.map((snapshot, index) => ({
            name: snapshot.metadata.name,
            downloadURL: downloadURLs[index],
          }));

          this.uploadedFileNames = this.uploadedFileNames.concat(
            uploadedData.map((data) => data.name)
          );
          this.uploadedFileURLs = this.uploadedFileURLs.concat(
            uploadedData.map((data) => data.downloadURL)
          );
          
          // Khi quá trình tải lên hoàn thành, đặt giá trị false
          this.uploading = false;
        } catch (error) {
          console.error("Error uploading:", error.message);
          this.uploading = false; // Đặt giá trị false nếu có lỗi
        }
      } else {
        alert("No file selected for upload.");
        this.uploading = false; // Đặt giá trị false nếu không có file được chọn
      }
    },
    handleFileChange() {
      const fileInput = this.$refs.myfile;

      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        const newFileNames = Array.from(fileInput.files).map((file) => file.name);
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
@keyframes fadeinRight {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes fadeinUp {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.header p {
  font-size: 2rem;
  text-transform: uppercase;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  line-height: 1.6rem;
  text-shadow: 0 0 5px rgb(23 255 250 / 80%), 0 0 10px rgb(51 240 255 / 80%);
  animation: fadeinUp 2s ease ;
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
.file-info {
  display: flex;
  margin: auto;
  background-color: hsl(0, 0%, 10%);
  align-items: center;
  border-radius: 20px;
  padding: 10px 30px;
  gap:10px
}
.file-name {
  padding-top: 12px;
  text-align: left;
  color:#fff;
}
.file-url {
  text-align: left;
  
}
.file-url a{
  color:#00cbd9;
  font-size: 1rem;
  font-family: Verdana, BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif ;
}
.file-uploaded li {
  list-style: none;
  margin:20px;
}
.file-image .icon{
  width: 60px;
  height: 60px;
  color: white;
}
.file-content{
  display: flex;
  flex-direction: column;
  float: left;;
  gap:5px;
}
.progress {
  text-align: center;
  margin: 24px auto;
  border-radius: 20px;
}
.progress-bar {
  /* color of choise */
  --clr: #05a8aa;
  /* loading time of choice */
  --load-time: 2s;
  outline: 5px solid var(--clr);
  outline-offset: 5px;
  position: relative;
  padding: 12px;
  background-color: rgb(0, 174, 217);
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
  animation: fadeinRight 2s ease;
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
.file-uploaded p,
li {
  color: black;
}

</style>
