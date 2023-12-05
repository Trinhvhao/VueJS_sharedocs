<template>
  <div id="app">
    <n-pagination v-model="page" :page-count="10" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      page: ref(2),
    };
  },
});
</script>
<style scoped>
#app{
    margin:auto;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top:24px;
}
</style>

// idea: 
+ gán link cho mỗi của các trang là các component searchVue
+ dữ liệu search Vue được làm mới, và có giới hạn số lượng được hiển thị
+ Ví dụ: tạo 48 dữ liệu bài post nhưng trang đầu chỉ dùng 12, trang sau 12, trang sau 12....
