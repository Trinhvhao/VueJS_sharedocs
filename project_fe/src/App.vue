<template>
  <div class="app">
    <div class="sidebar">
      <!-- <SearchFilterVue/> -->
      <UpLoadVue/>
      <!-- <PushFileVue/> -->
      <!-- <SideBar/> -->
    </div>
      
 <!-- <div class="main-content">
      <router-view />
      
    </div> -->
    
  </div> 
</template>

<script>

import FAQ from './components/Accordion.vue';
import SideBar from './components/Sidebar.vue';
import HomePageVue from './components/Home_page.vue';
import SearchFilterVue from './components/SearchFilter.vue';
import SlideShowVue from './components/SlideShow.vue';
import UpLoadVue from './components/UpLoad.vue';
import PushFileVue from './components/PushFile.vue';
export default {
  components: {
    HomePageVue,
    FAQ,
    SideBar,
    SearchFilterVue,
    SlideShowVue,
    UpLoadVue,
    PushFileVue,
  },
}
</script>

<style scoped lang="scss">
// .app {
//   display: flex;
//   height: 100vh;
// }
// .sidebar{
//   overflow-y:auto;
// }
// .main-content {
//   flex: 1 1 0;
//   padding: 2rem;

//   @media (max-width: 1024px) {
//     padding-left: 6rem;
//   }
// }

// .faqs {
//   margin-top: 20px; // Adjust margin as needed
// }
</style>
