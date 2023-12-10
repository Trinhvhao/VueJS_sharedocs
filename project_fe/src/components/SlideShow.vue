
<template>
  <n-carousel
    :key="myEffect"
    :effect="myEffect"
    :centered-slides="isCard"
    :slides-per-view="isCard ? 'auto' : 1"
    autoplay
    draggable
    style="height: 400px"
  >
    <n-carousel-item v-for="(slide, index) in slides" :key="index" :style="{ width: isCard ? '60%' : '100%' }">
      <div class="slide-content">
        <img class="carousel-img" :src="slide.imageSrc">
        <div class="text-below-slide" :class="{ 'hidden-text': !isCard }">{{ slide.text }}</div>
      </div>
    </n-carousel-item>
  </n-carousel>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  setup() {
    const effectRef = ref("card");
    const isCardRef = computed(() => effectRef.value === "card");
     const slides = [
      { imageSrc: "https://i.pinimg.com/564x/8e/b6/62/8eb662b4724aa949814f8c3581b35614.jpg", text: "Khám phá cùng chúng tôi thế giới của việc chia sẻ tài liệu miễn phí - một cộng đồng nơi kiến thức được lan truyền mà không có bất kỳ rào cản nào" },
       { imageSrc: "https://i.pinimg.com/564x/4e/27/59/4e27595c10b6355aea1eb3d9c421d1cd.jpg", text: " Hàng nghìn tài liệu, sách và bài giảng đang chờ đón bạn. Hãy tận hưởng việc học tập và chia sẻ kiến thức cùng cộng đồng lập trình đam mê." },
      { imageSrc: "https://i.pinimg.com/564x/f7/67/bd/f767bd8f226100b2b9f34816d47b679d.jpg", text: "Chúng tôi tin rằng mỗi người đều có quyền truy cập thông tin, và chia sẻ tài liệu miễn phí là cách chúng tôi đóng góp vào sự học tập và phát triển của cộng đồng" },
      { imageSrc: "https://i.pinimg.com/564x/bb/7c/9c/bb7c9ca12e4b6efd59e5b6678e509849.jpg", text: "Ở đây, mọi người có thể tải lên và tải xuống tài liệu một cách dễ dàng, tạo nên một nguồn lực đa dạng và phong phú" },
      { imageSrc: "https://i.pinimg.com/564x/96/39/09/9639093c7c1a546708c61470c79f02e8.jpg", text: "Chúng tôi đặt ra câu hỏi: 'Tại sao giữ lại kiến thức khi nó có thể được chia sẻ để nâng cao kiến thức của cả cộng đồng?" },
      { imageSrc: "https://i.pinimg.com/564x/33/80/34/3380347143d5e14aece580ef1d05f34d.jpg", text: "Trang web chia sẻ tài liệu của chúng tôi có thể truy cập từ mọi nơi, mọi lúc. Hỗ trợ trên điện thoại di động để bạn có thể học tập linh hoạt." },
      { imageSrc: "https://i.pinimg.com/564x/41/1b/df/411bdf3309e086f76d37d9195c6791fb.jpg", text: "Không chỉ có thể tải về các tài liệu, sách, mà bạn còn có thể chia sẻ tài liệu của mình để đóng góp vào cộng đồng?" },
      { imageSrc: "https://i.pinimg.com/564x/8c/1e/bc/8c1ebcacac9cc357c70aa33a1962b5cf.jpg", text: "Tìm hiểu từ nhiều nguồn đáng tin cậy với các tài liệu đa dạng về ngôn ngữ lập trình, framework, công cụ phát triển, và nhiều chủ đề khác nữa?" },
    ];
    return {
      isCard: isCardRef,
      myEffect: effectRef,
      slides,
    };
  }
});
</script>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 80%;
  height: 100%; /* Adjust as needed */
  object-fit: cover;
}

.text-below-slide {
     text-align: center;
    font-size: 16px;
    margin-top: 267px;
    color:rgb(0 0 0);
    position: absolute;
    font-weight: 500;
    width:60%;
    font-size: 15px;
    border-radius: 8px;
   font-family: 'Raleway', sans-serif;
    background:rgb(255, 255, 255);
}

.slide-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.hidden-text{
    display: none;
}
@media (max-width:576px) {
  .text-below-slide {
    width: 100%;
    margin-top: 100px;
  }
}
</style>
