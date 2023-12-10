<template>
  <div id="app">
    <footer>
      <div class="row">
        <div class="col">
          <img :src="logoURL" class="logo" alt="" />
          <p>Tại đây, bạn có thể truy cập hàng ngàn tài liệu, sách, và mã nguồn, hoàn toàn miễn phí. Hãy đồng hành cùng chúng tôi, lan tỏa kiến thức và tạo nên một cộng đồng lập trình mạnh mẽ.</p>
        </div>
        <div class="col">
          <h3>Address<div class="underline"><span></span></div></h3>
          <p>0358365493-0822069080</p>
          <p>Ha Noi - Viet Nam</p>
          <p>Information Technology</p>
          <p>Dai Nam University</p>
          <p class="email-id">@haotrinh142@gmail.com</p>
        </div>
        <div class="col">
            <h3>Links  <div class="underline"><span></span></div></h3>
            <ul>
                <li><a href="">Home</a></li>
                 <li><a href="">Services</a></li>
                  <li><a href="">About us</a></li>
                   <li><a href="">Features</a></li>
                    <li><a href="">Contacts</a></li>
            </ul>
        </div>
        <div class="col">
            <h3>Newsletter  <div class="underline"><span></span></div></h3>
            <form action="">
                <i class="icon fa-regular fa-envelope"></i>
                <input type="email" placeholder="Enter your email " required>
                <button type="submit"><i class="icon fa-solid fa-arrow-right"></i></button>
            </form>
            <div class="social-icons">
                <i class="icon fa-brands fa-facebook"></i>
                <i class="icon fa-brands fa-github"></i>
                <i class="icon fa-brands fa-linkedin"></i>
                <i class="icon fa-brands fa-telegram"></i>
            </div>
        </div>
      </div>
      <hr>
      <p class="copyright">© 2023 Share Document. All rights reserved. | Privacy Policy | Terms of Service</p>
       <p class="copyright">Built by <i>Trinh Van Hao - Nguyen Phuong Nam</i></p>
    </footer>
  </div>
</template>
<script setup>
import logoURL from "../assets/images/logo.png";
</script>
<style scoped>
footer {
  width: 100%;
  position: relative;
  bottom: 0;
  background: linear-gradient(to right, #020202ef, #1e3530a1);
  color: #fff;
  padding: 100px 0 30px;
  border-top-left-radius: 125px;
  font-size: 13px;
  line-height: 20px;
}

.row {
  width: 85%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.col {
  flex-basis: 25%;
  padding: 10px;
}
.col:nth-child(2),.col:nth-child(3){
    flex-basis: 15%;
}
.col p {
    font-size: 14px;
}
.logo {
  width: 150px;
  margin-bottom: 30px;
  object-fit: cover;
}
.col h3{
    width:fit-content;
    margin-bottom: 40px;
    position: relative;
}

.email-id{
    width:fit-content;
    margin:20px 0;
    border-bottom:1px solid #ccc;

}
ul li{
    list-style: none;
    margin-bottom: 12px;

}
ul li a{
    text-decoration: none;
    color: #fff;
}
form{
    padding-bottom: 15px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom:1px solid #ccc;
    margin-bottom: 50px;
}
form .icon{
    font-size: 18px;
    margin-right: 10px;
}
form input{
    width: 100%;
    background: transparent;
    color:#ccc;
    border: 0;
    outline:none;
}
form button{
    background: transparent;
    border:0;
    outline:none;
    cursor:pointer;
}
form button .icon{
    font-size: 16px ;
    color: #ccc;
}
.social-icons .icon{
    width:40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    font-size: 20px;
    color: #000;
    line-height: 40px;
    background: #fff;
    margin-right: 15px;
    cursor: pointer;
}
hr{
    width: 90%;
    border: 0;
    border-bottom: 1px solid #ccc;
    margin: 20px auto ;
}
.copyright{
    text-align: center;
}
.copyright{
    text-align: center;
    font-size: 16px;
}
.underline{
    width: 100%;
    height: 5px;
    background: #767676;
    border-radius: 3px;
    position: absolute;
    top:35px;
    left:0; 
       overflow: hidden;
}
.underline span{
    width: 15px;
    height: 100%;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    top:0;
    left: 10px;
    animation: moving 2s linear infinite;
}
ul{
    padding-left: 0;
}
@keyframes moving{
    0%{
        left:-20px;
    }
    100%{
        left: 100%;
    }
}
@media(max-width: 700px){
    footer{
        bottom: unset;
    }
    .col {
  flex-basis: 100%;

}
.col:nth-child(2),.col:nth-child(3){
    flex-basis: 100%;
}
}
</style>