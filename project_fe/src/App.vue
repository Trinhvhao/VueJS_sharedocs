<template>
<n-loading-bar-provider>
  <n-message-provider>
    <n-notification-provider>
      <n-dialog-provider>
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
        <div id="overlay" class="overlay">
          <div class="message">
            <span id="messageContent">Welcome to My Website</span>
          </div>
          <div class="content"></div>
        </div>
        <div><router-view /></div>
        <div v-if="isHomePage">
          <SlideOutVue />
          <SearchFilterVue />
          <div class="expand-content">
            <HomeContent />
            <RegardingVue />
            <TimeLineVue/>
          </div>
       
        </div> 
        <div class="footer">
            <FooterVue/>
          </div>
      </div>
    </div>
  </div>
      </n-dialog-provider>
    </n-notification-provider>
  </n-message-provider>
</n-loading-bar-provider>
 
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
import PaginationVue from "./components/Pagination.vue";
import HomeContent from "./components/HomeContent.vue";
import SlideOutVue from "./components/SlideOut.vue";
import RegardingVue from "./components/Regarding.vue";
import FooterVue from "./components/Footer.vue"
import TimeLineVue from './components/TimeLine.vue';
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
    PaginationVue,
    HomeContent,
    SlideOutVue,
    RegardingVue,
    FooterVue,
    TimeLineVue,
  },
  computed: {
    isHomePage() {
      // Kiểm tra nếu đang ở trang chủ
      return this.$route.path === "/";
    },
  },
  data() {
    return {
      showOverlay: true,
    };
  },
  mounted() {
    // Lấy phần tử overlay và phần tử message
    const overlay = document.getElementById("overlay");
    const messageElement = document.getElementById("messageContent");

    // Kiểm tra xem phần tử tồn tại trước khi thay đổi nội dung
    if (messageElement) {
      // Mảng chứa các thông điệp cần thay đổi
      const messages = [
        "Loading",
        "Please wait...",
        "Almost there...",
        "Done!",
      ];
      let currentMessageIndex = 0;

      // Hàm thay đổi nội dung của phần tử message
      function changeMessage() {
        messageElement.textContent = messages[currentMessageIndex];
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      }
      // Đặt interval để gọi hàm thay đổi sau mỗi khoảng thời gian (ví dụ: 2 giây)
      const intervalId = setInterval(changeMessage, 2000);

      // Sau một khoảng thời gian nhất định, dừng interval và ẩn overlay
      setTimeout(function () {
        clearInterval(intervalId);
        overlay.style.display = "none";
      }, 10000); // Dừng sau 10 giây (thời gian có thể điều chỉnh)
    }
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  display: flex;
  margin-top: 0;
  padding: 0;
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
    padding-right: 2rem;
  }
}
.faqs {
  margin-top: 20px; // Adjust margin as needed
}

.overlay {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.821);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.message {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  height: 40%;
  width:50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 767px) {
  .message {
    height: 30%; /* Điều chỉnh chiều cao cho các màn hình có kích thước nhỏ hơn 768px */
    width: 80%; /* Điều chỉnh chiều rộng cho các màn hình có kích thước nhỏ hơn 768px */
  }
}
.message span{
   margin: 0;
  font-size: 2rem;
  color: rgba(225,225,225, .01);
  background-image: url("https://i.pinimg.com/564x/0b/d5/c1/0bd5c1427c1a3a0963efc5e11ff6e07d.jpg");
  background-repeat: repeat;
  background-clip:text;
  animation: animate 15s ease-in-out infinite;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
}

  @keyframes animate {
    0%, 100% {
      background-position: left top;
    }
    25%{
      background-position: right bottom;
     }
    50% {
      background-position: left bottom;
    }
    75% {
      background-position: right top;
    }   
}
.expand-content{
  position: relative;
}
.footer{
  position: relative;
}
</style>
