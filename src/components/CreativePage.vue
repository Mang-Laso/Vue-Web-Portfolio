<template>
  <div class="creative-page">
    <h1>Creative Page</h1>
    <div class="button-container">
      <button class="random-button" @click="handleButtonClick">
        Press me!
      </button>
    </div>
    <div v-if="showVideo" class="video-container">
      <video autoplay @ended="handleVideoEnd" controls>
        <source src="@/assets/cat.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div v-if="encouragementText" class="encouragement">
      <pre>{{ encouragementText }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreativePage',
  data() {
    return {
      showVideo: false,
      encouragements: [
        { text: "Don't stop now! Press me again for more fun!" },
        { text: "Feeling bored? Hit that button again!" },
        { text: "What are you waiting for? Click me for a surprise!" },
        { text: "I promise I'm worth it! Press me again!" },
        { text: "Hey! It's me again! Don't leave me hanging!" },
        { text: "This button misses you! Press it for more!" },
        { text: "The magic happens when you press me! Go on!" },
        { text: "Don't be shy! Press me for another surprise!" },
        { text: "Your next laugh is just a button press away!" },
        { text: "One more time! Come on, make me laugh again!" },
      ],
      encouragementText: ''
    };
  },
  methods: {
    handleButtonClick() {
      this.showVideo = true; // Show the video when the button is clicked
      this.encouragementText = ''; // Reset encouragement text
    },
    handleVideoEnd() {
      this.showVideo = false; // Hide the video after it finishes
      this.encouragementText = this.getRandomEncouragement(); // Get a random encouragement after video ends
    },
    getRandomEncouragement() {
      const randomIndex = Math.floor(Math.random() * this.encouragements.length);
      return this.encouragements[randomIndex].text; // Return a random encouragement
    },
  },
};
</script>

<style scoped>
.creative-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height of the viewport */
}

.button-container {
  margin-bottom: 20px; /* Space below button */
}

.random-button {
  font-size: 2rem; /* Large font size */
  padding: 30px; /* Padding for the button */
  cursor: pointer; /* Pointer cursor on hover */
  background-color: red; /* Button color */
  color: white; /* Text color */
  border: none; /* Remove border */
  border-radius: 50%; /* Circular button */
  width: 180px; /* Width of the button */
  height: 180px; /* Height of the button */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Shadow effect */
  transition: transform 0.2s; /* Smooth transition for hover effect */
}

.random-button:hover {
  transform: scale(1.1); /* Scale up the button on hover */
}

.video-container {
  margin-top: 20px; /* Space above video */
}

.encouragement {
  margin-top: 20px; /* Space above encouragement text */
  font-size: 1.5rem; /* Size for encouragement text */
  text-align: center; /* Center the text */
}
</style>
