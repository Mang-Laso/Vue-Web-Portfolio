<template>
  <div class="login-container">
    <div class="login-box">
      <div class="profile-picture-container">
        <img src="@/assets/avatar.png" alt="Profile Picture" class="profile-picture" />
        <div class="popup-text">Hi! I am Hans.</div>
      </div>

      <h1>Hi, User! Please submit your credentials.</h1>

      <form @submit.prevent="login">
        <div class="input-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            :class="{ 'input-error': errorMessage }"
            aria-label="Username"
          />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            :class="{ 'input-error': errorMessage }"
            aria-label="Password"
          />
        </div>
        <button type="submit">Sign in</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>

      <p class="forgot-password" @click="showPopup = true" role="button">Forgot password?</p>
    </div>

    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span class="close" @click="showPopup = false">&times;</span>
        <p>Reminder: Username is <strong>admin</strong> and Password is <strong>admin</strong>.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const showPopup = ref(false);
const router = useRouter();

const login = () => {
  if (username.value === 'admin' && password.value === 'admin') {
    errorMessage.value = ''; // Clear any previous error message
    router.push('/dashboard/about'); // Redirect to the profile page
  } else {
    errorMessage.value = 'Invalid username or password. Please try again.';
  }
};
</script>

<style scoped>
/* Include your existing styles here */
html, body {
  height: 100%;
  margin: 0;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FAF9F6;
}

.login-box {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-family: 'Open Sans', sans-serif;
  color: #333;
}

.input-group {
  margin-bottom: 1rem;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 0.875rem;
}

.input-group input.input-error {
  border-color: #ff4d4d; /* Red border on error */
}

button {
  width: 100%;
  padding: 0.5rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: #ff4d4d;
  margin-top: 1rem;
  font-size: 0.875rem;
}

.forgot-password {
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #007BFF;
  cursor: pointer;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.close {
  float: right;
  font-size: 24px;
  cursor: pointer;
}

.profile-picture-container {
  position: relative;
  display: inline-block;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #fff;
  transition: transform 0.3s ease;
}

.profile-picture:hover {
  transform: scale(1.05);
}

.popup-text {
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  top: 50%;
  left: 130%;
  transform: translateY(-50%);
  white-space: nowrap;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s ease, left 0.6s ease;
}

.profile-picture-container:hover .popup-text {
  visibility: visible;
  opacity: 1;
  left: 105%;
}
</style>
