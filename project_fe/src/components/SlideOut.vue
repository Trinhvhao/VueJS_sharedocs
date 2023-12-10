<template>
  <div id="app">
    <n-button class="new-button type" @click="activate('bottom')"></n-button>
    <n-drawer
      v-model:show="active"
      :min-height="350"
      :placement="placement"
      :native-scrollbar="true"
      :resizable="true"
      :default-height="350"
    >
      <n-drawer-content title="What's new ? " closable>
        <div class="content-wrapper">
          <div class="column-wrapper">
            <ul class="menu-primary-hamburger">
              <li class="column-wrapper-item">
                <div class="item-icons">
                  <a href="https://www.facebook.com/trinhhao142.hayyier">
                    <i class="icon fa-brands fa-facebook"></i>
                  </a>
                </div>
                <span>Facebook</span>
              </li>
              <li class="column-wrapper-item">
                <div class="item-icons">
                  <a href="https://www.instagram.com/hayyie_zq.1402/">
                    <i class="icon fa-brands fa-square-instagram"></i>
                  </a>
                </div>
                <span>Instagram</span>
              </li>
              <li class="column-wrapper-item">
                <div class="item-icons">
                  <a href="https://github.com/Trinhvhao">
                    <i class="icon fa-brands fa-square-github"></i>
                  </a>
                </div>
                <span>Github</span>
              </li>
              <li class="column-wrapper-item">
                <div class="item-icons">
                  <a href="#">
                    <i class="icon fa-brands fa-youtube"></i>
                  </a>
                </div>
                <span>Youtube</span>
              </li>
              <li class="column-wrapper-item">
                <div class="item-icons">
                  <a href="#">
                    <i class="icon fa-brands fa-telegram"></i>
                  </a>
                </div>
                <span>Telegram</span>
              </li>
              <li class="column-wrapper-item">
                <div class="item-icons">
                  <a href="https://www.linkedin.com/in/trinhhvanhao-itcoder2004/">
                    <i class="icon fa-brands fa-linkedin"></i>
                  </a>
                </div>
                <span>Linkeln</span>
              </li>
            </ul>
          </div>
          <div class="slide-wrapper">
            <ul class="slide-list">
              <li class="list-item text">
                <div class="image">
                  <img
                    src="https://i.pinimg.com/564x/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg"
                    alt="Image 1"
                    class="item-image"
                  />
                </div>
                <div class="item-content">
                  <h3 class="item-title">
                    HTML, CSS, and JavaScript Integration
                  </h3>
                  <p class="item-description">
                    Begin your JavaScript journey by mastering the basics.
                    Understand JavaScript syntax, variables, and control flow
                  </p>
                </div>
              </li>
              <li class="list-item text">
                <div class="image">
                  <img
                    src="https://i.pinimg.com/736x/fa/b1/05/fab105583b6e8bb27d15946a7868920e.jpg"
                    alt="Image 2"
                    class="item-image"
                  />
                </div>
                <div class="item-content">
                  <h3 class="item-title">
                    A look into Self-Acceptance, Self-Love
                  </h3>
                  <p class="item-description">
                    To accept yourself means to embrace all aspects of who you
                    are, both the positive and the negative, without judgment or
                    criticism
                  </p>
                </div>
              </li>
              <li class="list-item text">
                <div class="image">
                  <img
                    src="https://i.pinimg.com/736x/7a/37/57/7a3757ced4d067d87e8fe8de70a33ad1.jpg"
                    alt="Image 1"
                    class="item-image"
                  />
                </div>
                <div class="item-content">
                  <h3 class="item-title">Variables and Data Types in Python</h3>
                  <p class="item-description">
                    Explore the fundamental concepts of Python programming
                    language, from basic syntax to essential data types
                  </p>
                </div>
              </li>
              <li class="list-item text">
                <div class="image">
                  <img
                    src="https://i.pinimg.com/736x/ab/49/bf/ab49bf33325a453b4fcb9347da72ab47.jpg"
                    alt="Image 1"
                    class="item-image"
                  />
                </div>
                <div class="item-content">
                  <h3 class="item-title">
                    Object-Oriented Programming in Java
                  </h3>
                  <p class="item-description">
                    Grasp the core concepts of Java programming. Dive into Java
                    syntax, control statements, and object-oriented programming
                    principles
                  </p>
                </div>
              </li>
              <li class="list-item text">
                <div class="image">
                  <img
                    src="https://i.pinimg.com/564x/c7/b5/33/c7b53384941f2db1d02763a5cae60a12.jpg"
                    alt="Image 1"
                    class="item-image"
                  />
                </div>
                <div class="item-content">
                  <h3 class="item-title">
                    Machine Learning Algorithms in Python
                  </h3>
                  <p class="item-description">
                    Delve into the realm of data science and machine learning
                    with Python. Explore powerful libraries such as NumPy,
                    Pandas, and Scikit-Learn
                  </p>
                </div>
              </li>
              <li class="list-item text">
                <div class="image">
                  <img
                    src="https://i.pinimg.com/564x/9a/5d/d4/9a5dd47a7f75fdfe50a8c90f6463dcd2.jpg"
                    alt="Image 1"
                    class="item-image"
                  />
                </div>
                <div class="item-content">
                  <h3 class="item-title">React.js and Vue.js Frameworks</h3>
                  <p class="item-description">
                    Unlock the power of JavaScript on the server side. Learn
                    Node.js basics and use Express.js to create robust web
                    servers
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
#app {
  max-width: 100%;
  display: flex;
  justify-content: center;
}
.new-button {
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.new-button:hover {
  box-shadow: 0.5px 0.5px 150px #252525;
}

.type::after {
  content: "View";
  height: 50px;
  width: 150px;
  background-color: #008080;
  color: #fff;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(50px);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.type::before {
  content: "What's new";
  height: 50px;
  width: 150px;
  background-color: #fff;
  color: #008080;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(0px) scale(1.2);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}

.type:hover::after {
  transform: translateY(0) scale(1.2);
}

.type:hover::before {
  transform: translateY(-50px) scale(0) rotate(120deg);
}
.menu-primary-hamburger {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.slide-list {
  margin: 0;
  padding: 0;
  margin-top: 24px;
}
.icon {
  font-size: 25px;
  line-height: 60px;
  transition: all 0.3s ease-out;
  padding: 0 8px;
  color: black;
}
.list-item {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
  padding: 12px 0;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
}
.list-item:hover {
  box-shadow: 0.5px 0.5px 150px #252525;
}
.text::after {
  content: "View";
  width: 100%;
  background-color: #000000;
  color: #fff;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(200px);
  font-size: 1.2rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.text:hover::after {
  transform: translateY(100%);
}
.item-title {
  font-size: 1.4rem;
}
.item-image {
  margin-right: 5px;
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
.content-wrapper {
  font-family: Georgia, Times, "Times New Roman", serif;
}
.column-wrapper-item {
  display: inline-block;
  height: 60px;
  width: 60px;
  overflow: hidden;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  margin: 0 5px;
}
.column-wrapper-item:hover {
  width: 200px;
}
.item-icons {
  display: inline-block;
  height: 60px;
  width: 60px;
  text-align: center;
  border-radius: 50px;
  box-sizing: border-box;
  line-height: 60px;
  transition: all 0.3s ease-out;
}
.column-wrapper-item:nth-child(1):hover .item-icons {
  background: #2c68e0; 
}
.column-wrapper-item:nth-child(2):hover .item-icons {
 background: #f82777;
}
.column-wrapper-item:nth-child(3):hover .item-icons {
 background: #211F1F;
}
.column-wrapper-item:nth-child(4):hover .item-icons {
    background: #FF0000; 
}
.column-wrapper-item:nth-child(5):hover .item-icons {
   background: #0088cc; /* Telegram */
}
.column-wrapper-item:nth-child(6):hover .item-icons {
   background: #0077b5;
}
.icon {
  line-height: 60px;
  transition: all 0.3s ease-out;
}
.column-wrapper-item:hover .icon{
  color: #fff;
}
.column-wrapper-item span {
  font-size: 20px;
  font-weight: 500;
  line-height: 60px;
  margin-left: 10px;
  transition: all 0.3s ease-out;
}
.column-wrapper-item:nth-child(1) span {
    color: #2c68e0; 
}
.column-wrapper-item:nth-child(2) span {
  color: #f82777;
}
.column-wrapper-item:nth-child(3) span {
  color: #211F1F;
}
.column-wrapper-item:nth-child(4) span {
  color: #FF0000;
}
.column-wrapper-item:nth-child(5) span {
  color: #0088cc;
}
.column-wrapper-item:nth-child(6) span {
  color: #0077b5;
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
