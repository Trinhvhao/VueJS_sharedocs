<template>
  <div class="app">
    <div class="container-fluid">
      <div class="sidebar">
        <!-- <HomePageVue/> -->
        <!-- <SearchFilterVue/> -->
        <!-- <UpLoadVue/> -->
        <!-- <TestDownloadVue/> -->
        <!-- <PushFileVue/> -->
        <SideBar />
      </div>
      <div class="main-content">
        <div><router-view /></div>
        <div v-if="isHomePage">
          <SearchFilterVue />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FAQ from "./components/Accordion.vue";
import SideBar from "./components/Sidebar.vue";
import HomePageVue from "./components/Home_page.vue";
import SearchFilterVue from "./components/SearchFilter.vue";
import SlideShowVue from "./components/SlideShow.vue";
import UpLoadVue from "./components/UpLoad.vue";
import PushFileVue from "./components/PushFile.vue";
import TestDownloadVue from "./components/TestDownload.vue";
export default {
  components: {
    HomePageVue,
    FAQ,
    SideBar,
    SearchFilterVue,
    SlideShowVue,
    UpLoadVue,
    PushFileVue,
    TestDownloadVue,
  },
  computed:{
     isHomePage() {
      // Kiểm tra nếu đang ở trang chủ
      return this.$route.path === "/";
    },
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  display: flex;
  margin-top: 0;
  padding:0;
}
.app {
  display: flex;
  height: 100vh;
}
.sidebar {
  overflow-y: auto;
}
.main-content {
  flex: 1 1 0;
  width: 100%; /* Đặt chiều rộng theo mong muốn của bạn */
  height: 100%; /* Đặt chiều cao theo mong muốn của bạn */
  overflow: auto; /* Tạo thanh cuộn */
  border: 1px solid #ccc; /* Thêm đường viền để nhìn rõ hơn */
  padding: 10px; /* Thêm padding nếu cần thiết */
  // padding: 2rem;

  @media (max-width: 1024px) {
    padding-left: 6rem;
  }
}

.faqs {
  margin-top: 20px; // Adjust margin as needed
}
</style>
