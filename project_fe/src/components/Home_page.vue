<template>
  <div class="home">
    <!-- Header -->
    <div class="login-section text-end mb-3">
      <div class="user" style="padding-bottom: 5px">
        <button id="btn-message" class="button-message">
          <div class="content-avatar">
            <div
              class="status-user"
              :class="{ 'online-status': $store.state.user }"
            ></div>
            <div class="avatar">
              <svg
                class="user-img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,12.5c-3.04,0-5.5,1.73-5.5,3.5s2.46,3.5,5.5,3.5,5.5-1.73,5.5-3.5-2.46-3.5-5.5-3.5Zm0-.5c1.66,0,3-1.34,3-3s-1.34-3-3-3-3,1.34-3,3,1.34,3,3,3Z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="notice-content">
            <div class="username">
              <span class="user-text p-2"
                >Welcome,{{
                  $store.state.user ? $store.state.user.username : "Guest"
                }}</span
              >
            </div>
            <div class="lable-message">Account</div>
            <div class="user-id">
              <span style="font-weight: 700"
                >@{{
                  $store.state.email ? $store.state.email.email : "none"
                }}</span
              >
            </div>
          </div>
        </button>
      </div>

      <router-link to="/login" class="btn btn-outline-secondary me-2"
        >Login</router-link
      >
      <a href="#" class="btn btn-primary">Free Trial</a>
    </div>
    <div class="header container w-100">
      <h1
        class="mb-5 text-center col-12 text-uppercase"
        style="font-size: 2.7rem"
      >
        <Header />
      </h1>
    </div>
    <!-- Body -->
    <div class="body-container">
      <div class="first-content container mt-5">
        <div class="row">
          <div class="col-md-4 mb-4">
            <img
              src="https://s.smallpdf.com/static/cms/f/102628/48x48/ce1a8c8535/7ca27d0428c9614899dc.svg"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Simple Online Tool To Combine PDFs</h3>
            <p>
              Trang web của chúng tôi cho phép bạn nhanh chóng tải lên nhiều tệp
              trong một lần, chỉ trong vài cú nhấp chuột. Không có đăng ký cần
              thiết để sử dụng công cụ trực tuyến này.
            </p>
          </div>

          <div class="col-md-4 mb-4">
            <img
              src="https://s.smallpdf.com/static/cms/f/102628/48x48/f1e714aece/ce852e16512bd6e094f1.svg"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Discover and read amazing publications</h3>
            <p>
              Xem hàng triệu ấn phẩm đầy cảm hứng trong thư viện rộng lớn của
              chúng tôi từ người dùng trên khắp thế giới.
            </p>
          </div>

          <div class="col-md-4 mb-4">
            <img
              src="https://s.smallpdf.com/static/cms/f/102628/48x48/00dcdafa20/d87ff218f8f01d7b05ef.svg"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Works on Windows, Mac, & Linux</h3>
            <p>
              Trang web của chúng tôi tương thích với Windows, Mac, và Linux,
              mang lại trải nghiệm linh hoạt và thuận tiện.
            </p>
          </div>

          <div class="col-md-4 mb-4">
            <img
              src="https://s.smallpdf.com/static/cms/f/102628/48x48/e08d473729/2e2d4d86b07e272f0e17.svg"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Secure Storage</h3>
            <p>
              Chào mừng bạn đến với trang web của chúng tôi, nơi bảo mật là ưu
              tiên hàng đầu. Hệ thống chúng tôi được thiết kế với các biện pháp
              an ninh hàng đầu để đảm bảo tài liệu của bạn được bảo vệ một cách
              tuyệt đối.
            </p>
          </div>

          <div class="col-md-4 mb-4">
            <img
              src="https://s.smallpdf.com/static/cms/f/102628/48x48/6bdaecb105/f311159a2781a3cfdfce.svg"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Intuitive and Friendly Interface</h3>
            <p>
              Khám phá trải nghiệm sử dụng tuyệt vời với giao diện trực quan và
              thân thiện người dùng. Các tính năng được sắp xếp một cách logic,
              giúp bạn dễ dàng tìm thấy và sử dụng mọi chức năng.
            </p>
          </div>

          <div class="col-md-4 mb-4">
            <img
              src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
              alt=""
              loading="lazy"
              width="48"
              height="48"
              class="img-fluid mb-3"
            />
            <h3 class="h5">Processing on the Cloud</h3>
            <p>
              Tận hưởng không gian lưu trữ an toàn và đáng tin cậy. Dữ liệu của
              bạn được lưu trữ trên các máy chủ mạnh mẽ và đáng tin cậy, giúp
              đảm bảo tính toàn vẹn và khả năng truy cập mọi lúc, mọi nơi.
            </p>
          </div>
        </div>
        <div class="slideshow">
          <SlideShowVue />
        </div>
      </div>
      <div class="second-content">
        <header class="header second-content">
          <h1 class="text-center text-uppercase">
            Programming documentation library
          </h1>
          <p class="sc-184bfsn-2 ezTbzM w-50 text-center m-auto">
            From popular programming languages to complex concepts, we provide
            detailed and complete information to assist you in your programming
            journey. All documents are regularly updated to ensure you always
            have the latest information. Explore and improve your programming
            knowledge with us!
          </p>
          <div class="sc-184bfsn-3 eInsOu"></div>
        </header>
      </div>
      <div class="faqs">
        <Accordion
          v-for="(faq, i) in faqs"
          :faq="faq"
          :index="i"
          :key="i"
          :open="faq.open"
          @toggleOpen="toggleOpen"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.col-md-4 {
   animation: fadeinUp 2s ease;
}
@keyframes fadeinUp {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
.header {
  background-color: #f8f9fa; /* Set your desired background color */
}

h1 {
  color: #0cada0ad; /* Set your desired text color */
  font-weight: bold;
}
.first-content h3 {
  color: #000000;
  text-shadow: 0 0 10px rgb(11 215 255 / 80%);
}

.searchbar {
  position: relative;
}
.btn-outline-secondary {
  margin-top: 5px;
  transition: all 0.2s ease-in-out;
}
.btn-outline-secondary:hover {
  scale: 1.2;
  color: black;
  background: var(--bg-color);
}
#btn-message {
  --text-color: #000;
  --bg-color-sup: #d2d2d2;
  --bg-color: #f4f4f4;
  --bg-hover-color: #ffffff;
  --online-status: #00da00;
  --offline-status: #8b8b8b;
  --font-size: 16px;
  --btn-transition: all 0.2s ease-out;
}
.button-message {
  display: flex;
  justify-content: center;
  align-items: center;
  font: 400 var(--font-size) Helvetica Neue, sans-serif;
  box-shadow: 0 0 2.17382px rgba(0, 0, 0, 0.049),
    0 1.75px 6.01034px rgba(0, 0, 0, 0.07),
    0 3.63px 14.4706px rgba(0, 0, 0, 0.091), 0 22px 48px rgba(0, 0, 0, 0.14);
  background-color: var(--bg-color);
  border-radius: 68px;
  cursor: pointer;
  padding: 6px 10px 6px 6px;
  width: fit-content;
  height: 40px;
  border: 0;
  overflow: hidden;
  position: relative;
  transition: var(--btn-transition);
}
.button-message:hover {
  height: 56px;
  padding: 8px 20px 8px 8px;
  background-color: var(--bg-hover-color);
  transition: var(--btn-transition);
}
.content-avatar {
  width: 30px;
  height: 30px;
  margin: 0;
  transition: var(--btn-transition);
  position: relative;
}

.button-message:hover .content-avatar {
  width: 40px;
  height: 40px;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--bg-color-sup);
}

.user-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-user {
  position: absolute;
  width: 6px;
  height: 6px;
  right: 1px;
  bottom: 1px;
  border-radius: 50%;
  outline: solid 2px var(--bg-color);
  background-color: var(--offline-status);
  transition: var(--btn-transition);
}
.online-status {
  background-color: var(--online-status); /* Color for online status */
}
.button-message:hover .status-user {
  width: 10px;
  height: 10px;
  right: 1px;
  bottom: 1px;
  outline: solid 3px var(--bg-hover-color);
}

.notice-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 8px;
  text-align: initial;
  color: var(--text-color);
}

.username {
  letter-spacing: -6px;
  height: 0;
  opacity: 0;
  transform: translateY(-20px);
  transition: var(--btn-transition);
}

.user-id {
  font-size: 12px;
  letter-spacing: -6px;
  height: 0;
  opacity: 0;
  transform: translateY(10px);
  transition: var(--btn-transition);
}

.lable-message {
  display: flex;
  align-items: center;
  opacity: 1;
  transform: scaleY(1);
  transition: var(--btn-transition);
}
.btn-primary {
  width: 6.5rem;
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
.button-message:hover .username {
  height: auto;
  letter-spacing: normal;
  opacity: 1;
  transform: translateY(0);
  transition: var(--btn-transition);
}

.button-message:hover .user-id {
  height: auto;
  letter-spacing: normal;
  opacity: 1;
  transform: translateY(0);
  transition: var(--btn-transition);
}

.button-message:hover .lable-message {
  height: 0;
  transform: scaleY(0);
  transition: var(--btn-transition);
}

.lable-message,
.username {
  font-weight: 600;
}

.number-message {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 8px;
  font-size: 12px;
  width: 16px;
  height: 16px;
  background-color: var(--bg-color-sup);
  border-radius: 20px;
}

/*==============================================*/
@keyframes active-status {
  0% {
    background-color: var(--online-status);
  }

  33.33% {
    background-color: #93e200;
  }

  66.33% {
    background-color: #93e200;
  }

  100% {
    background-color: var(--online-status);
  }
}
.button-message:active {
  transform: scale(0.99);
}
.user {
  align-items: center;
  justify-content: right;
  display: flex;
}
.user-text {
  font-size: 1.4rem;
  color: rgb(47, 140, 227);
}
.input {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border: 1px solid #ced4da; /* Set your desired border color */
  border-radius: 0.25rem;
  outline: none;
}

.btn-search {
  background-color: #007bff; /* Set your desired button background color */
  color: #fff; /* Set your desired button text color */
}

.btn-search:hover {
  background-color: #0056b3; /* Set your desired button hover color */
}
.login-section {
  margin-right: 10px;
}
.content {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  --app-height: 646px;
  box-sizing: border-box;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  padding: 66px 0px 36px;
}
/* ------------ VARIABLES ------------ */
:root {
  /* FONT */
  --font: "Poppins", sans-serif;

  /* COLORS */
  --color: #9176ff;
  --bg-color: #f4f4f4;
}

/* ------------ BASE ------------ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: var(--bg-color);
}

/* ----------- SLIDER ------------ */

/* Add more styles as needed */

/* Card */
.card {
  border: none;
}
.card-body {
  padding: 0;
}
.card-container {
  max-width: 1200px;
}
.card-img {
  overflow: hidden;
  height: 162px;
  padding-bottom: 12px;
}
.card-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
.card-header {
  color: rgb(36, 136, 207);
  font-weight: bold;
  padding: 0;
}
.card-title {
  color: black;
  font-size: 1rem;
}
.card-content {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgb(117, 117, 117);
  padding-bottom: 6px;
  text-transform: uppercase;
}
.card-container {
  align-items: center;
  margin: auto;
}
</style>

<!-- Swiper JS -->
<!-- Initialize Swiper -->
<script lang="ts">
import Header from "./Header.vue";
import Accordion from "./Accordion.vue";
import SlideShowVue from "./SlideShow.vue";
export default {
  components: {
    Accordion,
    SlideShowVue,
    Header,
  },
  data() {
    return {
      faqs: [
        {
          question:
            "Tại sao tôi nên sử dụng trang web chia sẻ tài liệu của bạn?",
          answer:
            "Trang web chia sẻ tài liệu của chúng tôi cung cấp một nơi thuận tiện để người dùng có thể tìm kiếm, chia sẻ, và tải xuống các tài liệu hữu ích. Chúng tôi tập trung vào việc tạo ra một cộng đồng nơi mọi người có thể chia sẻ kiến thức và kinh nghiệm.",
          open: false,
        },
        {
          question: "Làm thế nào để tìm kiếm tài liệu trên trang web của bạn?",
          answer:
            " Để tìm kiếm tài liệu, bạn có thể sử dụng thanh tìm kiếm trên trang chủ. Đơn giản nhập từ khoá hoặc tên tài liệu bạn quan tâm và nhấn Enter. Kết quả sẽ hiển thị các tài liệu phù hợp với yêu cầu của bạn.",
          open: false,
        },
        {
          question: " Làm thế nào để chia sẻ tài liệu của tôi?",
          answer:
            "Để chia sẻ tài liệu, đăng nhập vào tài khoản của bạn và chọn tùy chọn 'Chia sẻ tài liệu'. Bạn có thể tải lên tài liệu của mình, cung cấp mô tả chi tiết và chọn các thẻ liên quan để giúp người khác dễ dàng tìm thấy.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen(index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    email() {
      return this.$store.state.email;
    },
  },
};
</script>
