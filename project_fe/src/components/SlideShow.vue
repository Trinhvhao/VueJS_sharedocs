
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
      { imageSrc: "https://i.pinimg.com/564x/8e/b6/62/8eb662b4724aa949814f8c3581b35614.jpg", text: "Explore with us the world of free document sharing - a community where knowledge is spread without any barriers." },
      { imageSrc: "https://i.pinimg.com/564x/4e/27/59/4e27595c10b6355aea1eb3d9c421d1cd.jpg", text: " Thousands of documents, books, and lectures are waiting for you. Enjoy learning and sharing knowledge with the passionate programming community" },
      { imageSrc: "https://i.pinimg.com/564x/f7/67/bd/f767bd8f226100b2b9f34816d47b679d.jpg", text: "We believe that everyone has the right to access information, and sharing free documents is our contribution to the learning and development of the community" },
      { imageSrc: "https://i.pinimg.com/564x/bb/7c/9c/bb7c9ca12e4b6efd59e5b6678e509849.jpg", text: "Here, people can easily upload and download documents, creating a diverse and rich resource" },
      { imageSrc: "https://i.pinimg.com/564x/96/39/09/9639093c7c1a546708c61470c79f02e8.jpg", text: "We ask the question: 'Why hold onto knowledge when it can be shared to enhance the knowledge of the entire community?" },
      { imageSrc: "https://i.pinimg.com/564x/33/80/34/3380347143d5e14aece580ef1d05f34d.jpg", text: "Our document-sharing website is accessible from anywhere, anytime. Mobile support for flexible learning." },
      { imageSrc: "https://i.pinimg.com/564x/41/1b/df/411bdf3309e086f76d37d9195c6791fb.jpg", text: "Not only can you download documents and books, but you can also share your own documents to contribute to the community." },
      { imageSrc: "https://i.pinimg.com/564x/8c/1e/bc/8c1ebcacac9cc357c70aa33a1962b5cf.jpg", text: "Learn from many reliable sources with diverse documents on programming languages, frameworks, development tools, and many other topics." },
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
