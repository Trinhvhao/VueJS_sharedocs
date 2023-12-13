<template>
  <section class="about-page">
    <div class="first-content">
      <div class="heading text-center">
        <h1>About us</h1>
      </div>
      <div class="container1">
        <div class="hero-content col-xl-6 col-md-12 col-12">
          <h2>Welcome To Our Website</h2>
          <p>
            Welcome to our knowledge center! A place to share Diverse documents
            and knowledge to accompany you on your journey study and research
            program.
          </p>
          <button class="hero-button" @click="scrollToLearnMore">
            Learn more
          </button>
        </div>
        <div class="hero-image col-xl-6 col-md-12 col-12">
          <img
            src="https://i.pinimg.com/564x/bd/4e/46/bd4e4615984ae8448be12e2945287147.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="second-content" ref="secondContent">
      <div class="container1">
        <div class="hero-image col-xl-6 col-md-12 col-12">
          <img
            src="https://i.pinimg.com/564x/1a/81/f2/1a81f250fc939178e496bdc7c614c30e.jpg"
            alt=""
          />
        </div>
        <div class="hero-content col-xl-6 col-md-12 col-12">
          <h2>Diverse and Quality Resources at Your Fingertips</h2>
          <p>
            Diverse and quality resources are available at just a click
             click. Explore and access knowledge in an easy way
             best.
          </p>
        </div>
      </div>
    </div>
    <div class="third-content" ref="thirdContent">
      <div class="container1">
        <div class="hero-content col-xl-6 col-md-12 col-12">
          <h2>User-Friendly Interface for Seamless Exploration</h2>
          <p>
            The interface is friendly and easy to use, helping you understand them better
             me and how to make the most of the diverse resources we offer
             grant.
          </p>
        </div>
        <div class="hero-image col-xl-6 col-md-12 col-12">
          <img
            src="https://i.pinimg.com/564x/6e/fa/87/6efa87d55f80267b24c8e7d951e61d14.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Why people love Issuu -->
    <div class="four-content">
      <div class="four-content-heading">
        <h2>See why people love Share Document</h2>
        <p style="font-size: 1.25rem">
          Share Document is the platform of choice for everyone who wants to
          upload files and easily locate the documents they require.
        </p>
      </div>
      <div class="four-content-slide">
        <n-carousel :space-between="20" draggable autoplay>
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="carousel-slide"
          >
            <div class="avatar">
              <img :src="review.avatar" alt="" />
            </div>
            <div class="review-comment">
              <p>{{ review.comment }}</p>
              <p style="font-size: 16px; color: ">{{ review.author }}</p>
            </div>
          </div>
        </n-carousel>
      </div>
    </div>
    <!-- Person who created the page  -->
    <div class="who-content" ref="whoCreatePage">
      <div class="title">
        <h1 contenteditable>Who created This Website?</h1>
      </div>
      <div class="container1">
        <div class="hero-content col-xl-6 col-md-12 col-12">
          <h1>Hi,</h1>
          <h1>
            I'am <i style="color: #81c7c7">Trinh Van Hao<br />(Hayyie)</i>
          </h1>
          <h4>
            Living and studying in Hanoi. 2nd year student of Faculty of
            Technology Information by Blockchain major.
          </h4>
          <div class="des">
            <h3>
              <span style="font-size: 2rem; color: #098bff">"</span>Except those
              When he speaks out, he is quiet and introverted<span
                style="font-size: 2rem; color: #098bff"
                >"</span
              >
            </h3>
          </div>
          <div class="contact text-center">
            <a
              href="https://www.facebook.com/trinhhao142.hayyier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="icon fa-brands fa-facebook"></i
            ></a>
            <a
              href="https://github.com/Trinhvhao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="icon fa-brands fa-github"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/trinhhvanhao-itcoder2004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="icon fa-brands fa-linkedin"></i
            ></a>
            <a
              href="https://www.instagram.com/hayyie_zq.1402/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="icon fa-brands fa-instagram"></i
            ></a>
          </div>
        </div>
        <div class="hero-image col-xl-6 col-md-12 col-12">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sharedocs-293bb.appspot.com/o/folder%2Fz4813393122832_055ebbd38f2fb288fe618004bfc1db7c.jpg?alt=media&token=6f742aa6-cf1b-4a96-917b-9db6ee1f050e"
            alt=""
            style="object-position: center; height: 100%"
          />
        </div>
      </div>
    </div>
    <div class="container1">
      <div class="hero-content col-xl-6 col-md-12 col-12">
        <h1>Hey,?</h1>
        <h1>
          <i style="color: #be52ec"
            >Nguyen Phuong Nam<br />(Lat Pat Power#Dynam)</i
          >
        </h1>
        <h4>
          Born and raised in Lao Cai, lives, studies and works in Hanoi. 2nd
          year student <br />
          science Technology Specialized Information on Artificial Intelligence
          and Robotics.
        </h4>
        <div class="des">
          <h3>
            <span style="font-size: 2rem; color: #098bff">"</span>
            Việc không khó , khó quá thì khỏi làm.<span
              style="font-size: 2rem; color: #098bff"
              >"</span
            >
          </h3>
        </div>
        <div class="contact text-center">
          <a
            href="https://www.facebook.com/profile.php?id=100042710800089&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="icon fa-brands fa-facebook"></i
          ></a>
          <a
            href="https://github.com/nammmmbb9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="icon fa-brands fa-github"></i
          ></a>
          <a
            href="https://www.instagram.com/namden2244/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="icon fa-brands fa-instagram"></i
          ></a>
        </div>
        <div class="hero-image col-xl-6 col-md-12 col-12">
          <img
            src="https://i.pinimg.com/474x/00/1f/97/001f97f36f12b212060f79f450dcd791.jpg"
            alt=""
            style="object-position: center; height: 100%"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      reviews: [
        {
          avatar:
            "https://firebasestorage.googleapis.com/v0/b/sharedocs-293bb.appspot.com/o/folder%2F405311873_1374024146569147_4380411881023948234_n.jpg?alt=media&token=531ec626-d4c1-4754-b341-0b1f49716dfa",
          comment:
            "The interface is intuitive and easy to use, helping users search and access documents conveniently. Attractive homepage colors and layout, making the website look professional.",
          author: "Trinh Van Hao",
        },
        {
          avatar:
            "https://i.pinimg.com/564x/d0/9d/a1/d09da117fa5e737f978103bb274843fc.jpg",
          comment:
            "The document is clearly organized and structured, making it easy for users to read and understand. The content is diverse and rich, meeting the learning and research needs of users.",
          author: "Ths Đặng Khánh Trung",
        },
        {
          avatar:
            "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/383209139_790954919698035_7032342075252858837_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=smRNn28MGvkAX9b--OB&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDxP1B-_eNrKt4WL2kuDMdO64aGv--Bpo_hlvf7j9Zb-Q&oe=6579B07F",
          comment:
            "The website is responsive on many devices, from computers to mobile phones. Quality mobile application, helping users access documents anywhere.",
          author: "Sinh viên khoa CNTT DNU",
        },
        {
          avatar:
            "https://i.pinimg.com/564x/35/68/c4/3568c41f188379fe5405f1d2b6f6c34f.jpg",
          comment:
            "This is truly a great website, although not as fully functional as other document sharing websites, everything here is completely free. That was amazing. Thank you",
          author: "Nguyễn Phương Linh",
        },
      ],
    };
  },
  methods: {
    scrollToLearnMore() {
      // Sử dụng $refs để truy cập đến phần tử cụ thể (trong trường hợp này là learnMoreSection).
      // Cuộn màn hình đến phần tử có id là "learn-more-section" với hiệu ứng mượt.
      this.$refs.whoCreatePage.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
<style scoped>
.about-page {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
}
.hero {
  background-color: #f8f8f8;
}
.title {
  width: 85%;
  text-align: center;
  height: 200px;
  background-color: #000000;
  color: #fff;
  font-weight: 700;
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-radius: 20px;
}
.title h1 {
  font-size: calc(5vw + 10px);
  text-transform: uppercase;
  font-family: "Gambetta", serif;
  letter-spacing: -3px;
  transition: 700ms ease;
  font-variation-settings: "wght" 311;
  margin-bottom: 0.8rem;
  color: rgb(255, 255, 255);
  outline: none;
  text-align: center;
  animation: fadeinUp 2s ease;
  font-style: italic;
}
.four-content-heading {
  text-align: center;
  box-sizing: border-box;
  color: #1b1b33;
  margin: 0 auto;
  max-width: 94rem;
  padding: 3.5rem 1rem;
}
.four-content-heading h2 {
  font-size: 2.5rem;
  font-weight: 600;
}
.hero-content h1 {
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 1.15;
}
.hero-content h4 {
  text-align: left;
  font-family: "poppins", sans-serif;
  line-height: 2rem;
}
.des {
  text-align: right;
  font-family: "poppins", sans-serif;
}
.des h3 {
  font-size: 1.4rem;
  text-align: center;
  font-style: italic;
  color: #269a9a;
}
.des span {
  font-size: 18px;
  color: #000000; /* Text color */
  text-shadow: 1px 1px 2px rgba(129, 238, 255, 0.337); /* Text shadow for light effect */
}
.title h1:hover {
  font-variation-settings: "wght" 582;
  letter-spacing: 1px;
}
.heading h1 {
  color: #000000;
  font-size: 55px;
  text-align: center;
  margin-top: 25px;
  font-weight: 700;
}
.who-content {
  margin: 48px 0px;
}
.contact .icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  line-height: 40px;
  background: #000000;
  margin-right: 15px;
  cursor: pointer;
}
.container1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 65px auto;
  gap: 20px;
}
.hero-content {
  flex: 1;
  width: 600px;
  margin: 0px 25px;
  animation: fadeinUp 2s ease;
}
.hero-content h2 {
  font-size: 38px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
}
.hero-content p {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 40px;
  color: #666;
}
.hero-image {
  flex: 1;
  width: 600px;
  margin: auto;
  animation: fadeinRight 2s ease;
  overflow: hidden;
  object-fit: cover;
}
.hero-content button {
  display: inline-block;
  background-color: #000000;
  color: #fff;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 20px;
  border: none;
  transition: 0.3s ease;
}
.hero-content button:hover {
  background-color: #0fbda6;
  transform: scale(1.1);
}
.four-content {
  background: rgb(230, 251, 246);
  width: 85%;
  height: auto;
  margin: 48px auto;
}
.carousel-slide {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 85%;
  height: auto;
  background: #fff;
  border-radius: 20px;
  padding: 32px 32px 40px;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 8px 24px, rgba(0, 0, 0, 0.1) 0px 1px 4px;
  flex-wrap: wrap;
  margin: auto;
}
.review-comment {
  flex: 3;
  padding: 10px;
  font-size: 1.5rem;
}
.avatar {
  height: 8.5rem;
  width: 8.5rem;
  border-radius: 50%; /* Biến avatar thành hình tròn */
  border: 5px solid #1daa9770; /* Đường viền màu đen */
  object-fit: cover;
  overflow: hidden;
  margin: auto;
}
.avatar img {
  border-radius: 624.938rem;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.hero-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: top;
  border-radius: 20px;
}
@media screen and (max-width: 768px) {
  .heading h1 {
    font-size: 45px;
    margin-top: 30px;
  }
  .carousel-slide {
    padding: 32px 15px 40px;
  }
  .review-comment {
    font-size: 1.125rem;
  }
  .container1 {
    width: 100%;
    flex-direction: column;
    margin: 0px;
    padding: 0px 20px;
  }
  .hero-content {
    width: 100%;
    margin: 35px 0px;
  }
  .hero-content h2 {
    font-size: 30px;
  }
  .hero-content p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .hero-content button {
    font-size: 16px;
    padding: 8px 16px;
  }
  .hero-image {
    width: 100%;
  }
  .container1 .hero-image {
    order: 2;
  }
  .container1 .hero-content {
    margin-top: 80px;
  }
}
@media (min-width: 768px) {
  .four-content {
    padding: 4.5rem 3.75rem;
  }
}
@keyframes fadeinRight {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
@keyframes fadeinUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>