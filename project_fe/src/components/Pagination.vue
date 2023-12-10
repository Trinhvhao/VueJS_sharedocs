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
