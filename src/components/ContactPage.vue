<template>
  <div class="contact-page">
    <h1>Contact Me</h1>
    <div class="contact-info">
      <img src="@/assets/avatar.png" alt="Avatar" class="avatar" />
      <div class="info">
        <h2>Hans Stephen Lumasang</h2>
        <h3>4th Year, Computer Engineering Student - Data Science Elective</h3>
      </div>
    </div>
    <div class="contact-details">
      <div class="detail">
        <label for="phone">Phone Number:</label>
        <p class="contact-text" id="phone">(+63) 960 272 3666</p>
      </div>
      <div class="detail">
        <label for="facebook">Facebook:</label>
        <p class="contact-text" id="facebook">
          <a :href="facebookLink" target="_blank">Hans Stephen Lumasang</a>
        </p>
      </div>
      <div class="detail">
        <label for="school-email">School Email:</label>
        <p class="contact-text" id="school-email">
          <a :href="'mailto:' + schoolEmail" target="_blank">{{ schoolEmail }}</a>
        </p>
      </div>
      <div class="detail">
        <label for="personal-email">Personal Email:</label>
        <p class="contact-text" id="personal-email">
          <a :href="'mailto:' + personalEmail" target="_blank">{{ personalEmail }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      facebookLink: 'https://facebook.com/matsu.pitsuu',
      schoolEmail: 'mhslumasang@tip.edu.ph',
      personalEmail: 'lumasaghans@gmail.com',
    };
  },
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
  text-align: center;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.avatar {
  width: 150px; /* Adjust size as needed */
  height: 150px; /* Adjust size as needed */
  border-radius: 50%; /* Circular frame */
  margin-bottom: 15px;
}

.info h2 {
  font-size: 2rem; /* Increased font size */
  margin: 0;
}

.info h3 {
  font-size: 1.5rem; /* Increased font size */
  color: #666; /* Gray color */
  margin: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Space between contact fields */
}

.detail {
  width: 80%; /* Width of the input fields */
  max-width: 400px; /* Max width for larger screens */
  text-align: left; /* Align text to left */
}

label {
  font-size: 1.2rem; /* Font size for labels */
  margin-bottom: 5px; /* Space below labels */
}

.contact-text {
  font-size: 1rem; /* Font size for contact text */
  padding: 10px; /* Padding for contact text */
  border: 1px solid #ccc; /* Border for contact text */
  border-radius: 5px; /* Rounded corners */
  background-color: #f9f9f9; /* Light background color for better visibility */
}

.contact-text a {
  color: #007BFF; /* Link color */
  text-decoration: none; /* Remove underline */
}

.contact-text a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>
