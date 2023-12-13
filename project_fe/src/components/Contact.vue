<template>
  <div id="app">
    <div class="container">
      <div class="content">
        <div class="left-side">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Address</div>
            <div class="text-one">Phu Lam</div>
            <div class="text-two">Dai Nam University</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">+0358365493</div>
            <div class="text-two">+077759008</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">haotrinh142@gmail.com</div>
            <div class="text-two">dainam@gmail.com</div>
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">Send us a message</div>
          <p>
            If you have any work from me or any types of quries related to my
            tutorial, you can send me message from here. It's my pleasure to
            help you.
          </p>
          <form action="#">
            <div class="input-box">
              <input
                type="text"
                v-model="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="input-box">
              <input
                type="email"
                v-model="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="input-box message-box"></div>
            <div class="button">
              <input type="button" value="Send Now" @click="handleSuccess" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useMessage, useDialog } from "naive-ui";

export default defineComponent({
  setup() {
    const name = ref("");
    const email = ref("");
    const message = useMessage();
    const dialog = useDialog();

    const handleSuccess = () => {
      if (name.value && email.value) {
        dialog.success({
          title: "Success",
          content: "Cool",
          positiveText: "Wow!",
          onPositiveClick: () => {
            message.success("Great!");
          },
        });
      } else {
        message.error("Please fill in both name and email.");
      }
    };

    return { name, email, handleSuccess };
  },
});
</script>
<style scoped>
#app {
  min-height: 100vh;
  width: 100%;
  background: #c8e8e9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 85%;
  background: #fff;
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.container .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container .content .left-side {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;
  animation: fadeinUp 2s ease;
}
.content .left-side::before {
  content: "";
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afafb6;
}
.content .left-side .details {
  margin: 14px;
  text-align: center;
}
.content .left-side .details i {
  font-size: 30px;
  color: #3e2093;
  margin-bottom: 10px;
}
.content .left-side .details .topic {
  font-size: 18px;
  font-weight: 500;
}
.content .left-side .details .text-one,
.content .left-side .details .text-two {
  font-size: 14px;
  color: #afafb6;
}
.container .content .right-side {
  width: 75%;
  margin-left: 75px;
animation: fadeinRight 2s ease;
}
.content .right-side .topic-text {
  font-size: 23px;
  font-weight: 600;
  color: #3e2093;
}
.right-side .input-box {
  height: 50px;
  width: 100%;
  margin: 12px 0;
}
.right-side .input-box input,
.right-side .input-box textarea {
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  background: #f0f1f8;
  border-radius: 6px;
  padding: 0 15px;
  resize: none;
}
.right-side .message-box {
  min-height: 110px;
}
.right-side .input-box textarea {
  padding-top: 6px;
}
.right-side .button {
  display: inline-block;
  margin-top: 12px;
}
.right-side .button input[type="button"] {
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  background: #3e2093;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button input[type="button"]:hover {
  background: #5029bc;
}
@media (max-width: 950px) {
  .container {
    width: 90%;
    padding: 30px 40px 40px 35px;
  }
}
@media (max-width: 820px) {
  .container {
    margin: 40px 0;
    height: 100%;
  }
  .container .content {
    flex-direction: column-reverse;
  }
  .container .content .left-side {
    width: 100%;
    flex-direction: row;
    margin-top: 40px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .container .content .left-side::before {
    display: none;
  }
  .container .content .right-side {
    width: 100%;
    margin-left: 0;
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