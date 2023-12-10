<template>
  <div>
    <UploadVue />
    <PushFileVue/>
  </div>
</template>
<script>
import PushFileVue from '../components/PushFile.vue';
import UploadVue from "../components/UpLoad.vue";
export default {
  components: {
    UploadVue,PushFileVue,
  },
};
</script>