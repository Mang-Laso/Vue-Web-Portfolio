<template>
  <div class="creative-page">
    <h1>Creative Page</h1>
    <div class="button-container">
      <button class="random-button" @click="handleButtonClick">
        <pre>{{ buttonText }}</pre>
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
      buttonText: `
       _____
      |  *  | 
      |     |
      |_____| 
      Press me!`,
      encouragements: [
        { text: "Don't stop now! Press me again and let the fun roll!", art: "     *  *\n   *      *\n  *  LET'S  *\n *   GO!   *\n    *  *\n" },
        { text: "Feeling bored? Hit that button again for some more laughs!", art: "  *  *  *  \n *    *    * \n*    FUN    *\n *  AGAIN  * \n  *  *  *   \n" },
        { text: "What are you waiting for? Click me for another surprise!", art: "     .--.\n    |o_o |\n    |:_/ |\n   //   \\ \\ \n  (|     | )\n" },
        { text: "I promise I'm worth it! Press me for another giggle!", art: "     ^  ^  \n    ( o_o )\n    (  -  )\n    -\"---\"- \n" },
        { text: "Hey! It's me again! Don't leave me hanging, click again!", art: "   \\\\  //\n    (o  o)\n     | __ |\n     /    \\ \n" },
        { text: "This button misses you! Give it some love and press again!", art: "     .-.\n    (o o)\n    | O |\n     '-' \n" },
        { text: "The magic happens when you press me! Go on, do it!", art: "  .-.\n (O O)\n | O |\n |___|\n" },
        { text: "Don't be shy! Press me for another surprise!", art: "    * * *\n   *   *  \n  *  FUN  *\n   * * *  \n" },
        { text: "Your next laugh is just a button press away!", art: "  .-.-.\n (o o o)\n | O O |\n '-.-.-'\n" },
        { text: "One more time! Come on, make me laugh again!", art: "   .----.\n  /  o o  \\\n |   O    |\n  \\______/\n" },
      ],
      encouragementText: ''
    };
  },
  methods: {
    handleButtonClick() {
      this.showVideo = true; 
      this.encouragementText = ''; 
    },
    handleVideoEnd() {
      this.showVideo = false; 
      this.encouragementText = this.getRandomEncouragement(); 
    },
    getRandomEncouragement() {
      const randomIndex = Math.floor(Math.random() * this.encouragements.length);
      return this.encouragements[randomIndex].art + '\n' + this.encouragements[randomIndex].text; 
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
  height: 100vh;
}

.button-container {
  margin-bottom: 20px;
}

.random-button {
  font-family: monospace; 
  font-size: 2rem; 
  padding: 20px; 
  cursor: pointer; 
  background-color: red; 
  color: white; 
  border: none; 
  border-radius: 50%; 
  width: 150px; 
  height: 150px; 
}

.video-container {
  margin-top: 20px; 
}

.encouragement {
  margin-top: 20px; 
  font-size: 1.5rem; 
  text-align: center; 
}
</style>
