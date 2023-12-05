<template>
  <div class="input-container">
    <div class="title">
      <p style="text-shadow: 1px 1px aqua"><strong>Share Document</strong></p>
      Registration
    </div>
    <form @submit.prevent="sendForm">
      <div class="user-details">
        <div class="input-box">
          <span>Full name</span>
          <input
            type="text"
            v-model="formData.fullname"
            placeholder="Enter your name"
            required
          />
        </div>

        <div class="input-box">
          <span>User name</span>
          <input
            type="text"
            v-model="formData.username"
            placeholder="Enter your name"
            required
          />
        </div>

        <div class="input-box">
          <span>Email</span>
          <input
            type="text"
            v-model="formData.email"
            placeholder="Email"
            required
          />
        </div>

        <div class="input-box">
          <span>Phone number</span>
          <input
            type="text"
            v-model="formData.phonenumber"
            placeholder="Number"
            required
          />
        </div>

        <div class="input-box">
          <span>Password</span>
          <input
            type="password"
            v-model="formData.password"
            placeholder="Password"
            required
          />
        </div>

        <div class="input-box">
          <span>Confirm Password</span>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div class="input-button">
          <button
            type="submit"
            class="btn btn-default"
            id="submit-form"
          >
            Submit
          </button>

          <div class="register-login">
            <p>Bạn đã có tài khoản rồi? <a href="#">Đăng nhập</a>.</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        fullname: '',
        username: '',
        email: '',
        phonenumber: '',
        password: '',
      },
      confirmPassword: '',
    };
  },
  methods: {
    async sendForm() {
      // Check if passwords match
      if (this.formData.password !== this.confirmPassword) {
        alert('Passwords do not match. Please check and try again.');
        return;
      }

      try {
        // Send data to mock API endpoint
        const response = await fetch('https://655738d6bd4bcef8b61244eb.mockapi.io/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          this.showSuccessAlertAndRedirect();
        } else {
          alert('Failed to submit the form. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
        alert('An error occurred. Please try again later.');
      }
      // After successful login, set user in Vuex store
    this.$store.commit('setUser', { username: this.formData.username }); // Replace with actual user data
    this.$store.commit('setEmail', { email: this.formData.email }); // Replace with actual user data
    },
    showSuccessAlertAndRedirect() {
      // Show success alert
      alert('Form submitted successfully!');

      // Redirect to the home page
      this.$router.push({ name: 'Home' }); // Adjust the route name if needed
    },
    
  },
};
</script>

<style scoped>
/* Your existing styles */
</style>

<style scoped > 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 10px;
  background-position: center;
  align-items: center;
  background-image: url("C:/Users/Admin/OneDrive/Tài liệu/LibraryCode/HTML_Document/DuanWeb001/assets/img/qvo16p0n20220607102443.jpg");
}
.input-container {
  max-width: 700px;
  width: 100%;
margin: auto;
  background-color: #a8dfe4a6;
  padding: 25px 30px;
  border-radius: 5px;
}
.input-container .title {
  font-size: 1.8rem;
  letter-spacing: 1px;
  line-height: 1.5;
  font-weight: 500;
}
.user-details {
  display: flex;
  /* justify-content: ;
            flex-direction: column; */
  flex-wrap: wrap;
  justify-content: space-between;
}
.input-box {
  margin: 20px 0 12px 0;
  width: calc(100% / 2 - 20px);
}
.input-box input {
  height: 45px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  text-indent: 10px;
  margin-top: 10px;
}
.input-box span {
  margin-bottom: 5px;
}
.input-button {
  margin: 30px auto;
  text-align: center;
}
.input-button button {
  width: 200px;
  background-color: #92d2cc;
  padding: 10px;
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 700;
  text-shadow: 0 0 10px #c665c6;
}
</style>