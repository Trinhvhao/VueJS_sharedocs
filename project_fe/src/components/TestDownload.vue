<template>
  <!-- Phần template chứa cấu trúc HTML của component -->
  <div class="my-component">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  // Phần script chứa logic JavaScript của component
  data() {
    return {
      content: "This is the content of my component.",
    };
  },
  methods: {
    // Các phương thức xử lý sự kiện hoặc logic khác
    handleClick() {
      console.log("Button clicked!");
    },
  },
  // Các phần khác như computed properties, lifecycle hooks, và các cấu hình khác
};
</script>

<style scoped>
/* Phần style chứa CSS của component */

</style>