<template>
  <div id="app">
    <div class="container">
      <div class="post" v-show="!showPost">
        <div class="text">Thanks for rating us♥️♥️♥️</div>
        <div class="edit" @click="showPost = true">EDIT</div>
      </div>
      <div class="star-widget" v-show="showPost">
        <input type="radio" name="rate" id="rate-5" />
        <label for="rate-5" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-4" />
        <label for="rate-4" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-3" />
        <label for="rate-3" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-2" />
        <label for="rate-2" class="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-1" />
        <label for="rate-1" class="fas fa-star"></label>
        <form @submit.prevent="submitForm">
         <header></header>
          
          <div class="textarea">
            <textarea
              v-model="description"
              cols="30"
              placeholder="Describe your experience.."
            ></textarea>
          </div>
        </form>
      </div>
      <div v-show="showPost" class="btn">
        <button @click="showPost = false" type="submit">
          <div class="svg-wrapper-container">
            <div class="svg-wrapper">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMess: false,
      showPost: true,
      description: "",
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      this.showPost = true;
      this.message = `Thanks for your rating of ${this.rating} stars!`;
    },
    getRatingText() {
      switch (this.rating) {
        case 1:
          return "I just hate it";
        case 2:
          return "I don't like it";
        case 3:
          return "It is awesome";
        case 4:
          return "I just like it";
        case 5:
          return "Very good, I love it";
        default:
          return "";
      }
    },
  },
};
</script>


<style scoped>
#app {
  font-family: Verdana, BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important; 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  scale: 0.9;
}
.container {
  margin-top: 40px;
  position: relative;
  width: 400px;
  background: #111;
  padding: 20px 30px;
  border: 1px solid #444;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container .text {
  font-size: 25px;
  color: #ffffff;
  font-weight: 500;
  animation: glow 2s infinite alternate;
}
@keyframes glow {
  0% {
    text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00;
  }
  50% {
    text-shadow: 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f;
  }
  100%{

    text-shadow: 0 0 30px #00fff2, 0 0 40px #00fffb, 0 0 50px #00eeff;
  }
  }
.container .edit {
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 16px;
  color: #666;
  font-weight: 500;
  cursor: pointer;
}
.container .edit:hover {
  text-decoration: underline;
}
.container .star-widget input {
  display: none;
}
@media screen and (max-width: 760px) {
  /* Điều chỉnh kiểu dáng cho màn hình nhỏ hơn hoặc bằng 760px */
  .container .text{
    font-size:18px;
  }
  .star-widget .fa-star{
    font-size: 24px;
  }
  .container{
    padding: 20px 10px;
  }
}
.star-widget label {
  font-size: 40px;
  color: #444;
  padding: 10px;
  float: right;
  transition: all 0, 2s ease;
}
header{
  display: inline-block;
}
.star-widget input:not(:checked) ~ label:hover,
.star-widget input:not(:checked) ~ label:hover ~ label {
  color: #fd4;
}
input:checked ~ label {
  color: #fd4;
}
input#rate-5:checked ~ label {
  color: #fe7;
  text-shadow: 0 0 20px #952;
}
#rate-1:checked ~ form header:before {
  content: "I just hate it ";
}
#rate-2:checked ~ form header:before {
  content: "I don't like it ";
}
#rate-3:checked ~ form header:before {
  content: "It is awesome";
}
#rate-4:checked ~ form header:before {
  content: "I just like it";
}
#rate-5:checked ~ form header::before {
  content: "Very good, I love it";
}

input:checked ~ form {
  display: block;
}
form header {
  width: 100%;
  font-size: 25px;
  color: #fe7;
  font-weight: 500;
  margin: 5px 0 20px 0;
  text-align: center;
  transition: all 0.2s ease;
}
form .textarea textarea {
  height: 100%;
  width: 100%;
  outline: none;
  color: #898585;
  border: 1px solid #333;
  background: #222;
  padding: 10px;
  font-size: 17px;
  resize: none;
}
.textarea textarea :focus {
  border-color: #444;
}
form .btn {
  height: 45px;
  width: 100%;
  margin: 15px 0;
}
.btn button {
  height: 100%;
  width: 100%;
  outline: none;
  background-color: #222;
  color: white;
  fill: rgb(155, 153, 153);
  font-size: 1rem;
  margin-top:12px;
  padding:0.7em 1em;
  padding-left:0.9em;
  display: flex;
  align-items: center;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  border-radius: 15px;
}
button span {
  display: block;
  margin-left: 0.3em;
  transition: all 0.3s ease-in-out;
}
button svg {
  display: block;
  transform-origin: center center;
  transition: transform 0.3s ease-in-out;
}
button:hover .svg-wrapper {
  transform: scale(1.25);
  transition: .5s linear;
}
.btn button:hover {
  background: #ffffff;
}
button:hover svg {
  transform: translateX(1.2em) scale(1.1);
  fill: #fff;
}
button:hover span {
  opacity: 0;
  transition: .5s linear;
}

button:active {
  transform: scale(0.95);
}

</style>