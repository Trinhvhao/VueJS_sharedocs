<template>
  <div >
    <label>Upload a file</label>
    <div>
      <input type="file" @change="handleChange">
    </div>
    <div ></div>
  </div>
</template>
<script >
import {getStorage,storage, uploadBytesResumable, ref as storageReference} from 'firebase/storage'
import {ref} from 'vue'
const progress= ref(0)
const CuruploadTask = ref(null);
function handleChange(e){
  const storage = getStorage()
  const storageRef = storageReference(storage,'folder/myfile')
  uploadTask.value = uploadBytesResumable(storageRef, e.target.files[0])
  uploadTask.on('state_changed', (snapshot)=>{
    progress.value = (snapshot.bytesTransferred/ snapshot.totalBytes) *100;
  })
}




export default {
  
}
</script>