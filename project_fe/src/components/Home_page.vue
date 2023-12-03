<template>
  <div class="home">
    <!-- Header -->
    <div class="login-section text-end mb-3">
      <a href="#" class="btn btn-outline-secondary me-2">Login</a>
      <a href="#" class="btn btn-primary">Free Trial</a>
    </div>
    <div class="header container w-100">
      <h1
        class="mb-5 text-center col-12 text-uppercase"
        style="font-size: 2.7rem"
      >
        Share Document
      </h1>
    </div>

    <SlideShowVue />
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
              Our PDF merger allows you to quickly combine multiple PDF files
              into one single PDF document, in just a few clicks. No signup is
              needed to use this online tool.
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
            <h3 class="h5">Secure PDF Merging Online</h3>
            <p>
              All the files you upload, as well as the file generated on our
              server, will be deleted permanently within an hour. Read our
              privacy policy below for more details.
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
              Our PDF combiner is browser-based. So, it works for all operating
              systems, including Mac, Windows, and Linux.
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
            <h3 class="h5">Easy PDF Combining With a Preview</h3>
            <p>
              By dragging your pages in the editor area you can rearrange them
              or delete single pages. Also, you can add more PDFs to combine
              them and merge them into one single document.
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
            <h3 class="h5">Merge PDFs Reliably</h3>
            <p>
              To merge PDFs or just to add a page to a PDF you usually have to
              buy expensive software. This online service is safe and secure.
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
              All PDF merging and creating happens on the cloud without draining
              any capacity from your computer.
            </p>
          </div>
        </div>
      </div>
      <div class="second-content">
        <header class="header second-content">
          <h1 class="text-center text-uppercase">Smallpdf Templates Library</h1>
          <p class="sc-184bfsn-2 ezTbzM w-50 text-center m-auto">
            Explore hundreds of professional, free templates designed to help
            get things done faster. From personal reference letters to standard
            invoice templates, we’ve got what you need, for business or life.
            Downloadable, editable, and signable, get your work done—simpler,
            faster, smarter.
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
.header {
  background-color: #f8f9fa; /* Set your desired background color */
}

h1 {
  color: #0cada0ad; /* Set your desired text color */
  font-weight: bold;
}

.searchbar {
  position: relative;
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
import Accordion from "./Accordion.vue";
import SlideShowVue from "./SlideShow.vue";
export default {
  components: {
    Accordion,
    SlideShowVue,
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
};
</script>
