<template>
  <div>
    <n-button @click="activate('bottom')"> NEW </n-button>
    <n-drawer
      v-model:show="active"
      :width="502"
      :placement="placement"
      :native-scrollbar="true"
      :resizable="true"
    >
      <n-drawer-content title="What's new ? " closable>
        <div class="content-wrapper">
          <div class="column-wrapper">
            <ul class="menu-primary-hamburger">
              <li class="column-wrapper-item">
                <a href="#">
                  <i class="icon fa-brands fa-facebook"></i>
                </a>
              </li>
              <li class="column-wrapper-item">
                <a href="#">
                  <i class="icon fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li class="column-wrapper-item">
                <a href="#">
                  <i class="icon fa-brands fa-square-github"></i>
                </a>
              </li>
              <li class="column-wrapper-item">
                <a href="#">
                  <i class="icon fa-brands fa-youtube"></i>
                </a>
              </li>
              <li class="column-wrapper-item">
                <a href="#">
                  <i class="icon fa-brands fa-telegram"></i>
                </a>
              </li>
              <li class="column-wrapper-item">
                <a href="#">
                  <i class="icon fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="slide-wrapper">
            <ul class="item-list">
              <li class="list-item">
                <div class="image">
                <img
                  src="https://i.pinimg.com/564x/01/fa/5f/01fa5f922ef04e0260af624712aed553.jpg"
                  alt="Image 1"
                  class="item-image"
                />
                </div>
                <div class="item-content">
                  <h3 class="item-title">Title 1</h3>
                  <p class="item-description">
                    Description 1 Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                </div>
              </li>
              <li class="list-item">
                <div class="image">
                <img
                  src="https://i.pinimg.com/736x/e9/58/41/e95841e51509063d6c5a763343de6394.jpg"
                  alt="Image 2"
                  class="item-image"
                /></div>
                <div class="item-content">
                  <h3 class="item-title">Title 2</h3>
                  <p class="item-description">
                    Description 2 Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                </div>
              </li>
              <!-- Add more list items as needed -->
            </ul>
          </div>
        </div>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>
<style scoped>
.menu-primary-hamburger {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.icon:last-child {
  font-size: 2rem;
  padding: 0 8px;
  color: black;
}
.content-wrapper {
  display: flex;
  justify-content: space-evenly;
}
.list-item{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 16px;
}
.item-image{
  margin-right:5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.item-description {
  margin: 8px 0 0;
  color: #666;
}
.item-content {
  flex-grow: 1;
}
</style>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const active = ref(false);
    const placement = ref("bottom");
    const activate = (place) => {
      active.value = true;
      placement.value = place;
    };
    return {
      activate,
      placement,
      active,
    };
  },
});
</script>
