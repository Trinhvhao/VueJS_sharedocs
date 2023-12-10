<template>
  <main>
    <Home />
    <div class="banner">
      <div class="banner-body">
        <div class="banner-content">
          <span
            >Start building engaging Social Posts today, and share them with
            eager audiences in minutes.</span
          >
        </div>
        <div class="banner-button">
          <router-link to="/upload" class="link"
            ><span class="">Get Started</span></router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Home from "../components/Home_page.vue";

export default {
  components: {
    Home,
  },
};
</script>
<style scoped>
.banner {
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  margin: 48px auto;
  width: 100%;
  height: 350px;
  border-radius: 20px;
}
.banner-content {
  color: white;
  width: 60%;
  text-align: center;
  letter-spacing: 1px;
  font-size: calc(2vw + 10px);
  font-family: Poppins,sans-serif;
  font-weight: 700;
}
.banner-body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.banner-button {
  border-radius: 30px;
  border: 2px solid rgb(255, 255, 255);
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  justify-content: center;
  padding: 0.6em 1.14em;
  position: relative;
  transition: all 0.3s ease;
  font-weight: 700;
}
.banner-button span {
  text-decoration: none;
  color: white;
}
.banner-button:hover {
  background-color: #ffffff;
}
.banner-button:hover span {
  color: black;
}
.link {
  text-decoration: none;
}
</style>