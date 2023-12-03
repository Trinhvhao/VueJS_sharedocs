<template>
  <div id="app">
    <CloudImage path="folder/myfile.gif"/>
  <input type="file" ref="myfile">
  <button @click="upload">upload</button>
  </div>
</template>

<script>
import  { storage } from "../firebase"
import  { ref,uploadBytes } from "firebase/storage"
import CloudImage from "./CloudImage.vue"

export default {
  name: 'App',
  components: {
    CloudImage
  },
  methods:{
    upload: function() {
      const storageRef = ref(storage, 'folder/myfile.gif');
      uploadBytes(storageRef,this.$refs.myfile.files[0]).then((snapshot)=> {
        console.log("uploaded")
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

