<template>
  <div class="showcase">
    <h1>Showcase Projects</h1>
    <div class="project-container">
      <div class="project" v-for="project in projects" :key="project.id">
        <a :href="project.link" class="project-link" target="_blank" rel="noopener noreferrer">
          <img :src="project.image" alt="Project Image" class="project-image" />
          <div class="project-info">
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-description">{{ project.description }}</p>
            <span class="project-link-text">View Project</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowcasePage',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'My Data Structure Outputs',
          description: 'This project showcases various data structure outputs that demonstrate my understanding and practical application of fundamental data structures. It includes operations on arrays, linked lists, stacks, and queues, providing insights into their performance and efficiency. The outputs are designed to illustrate the differences between different data structures in terms of speed and complexity, enabling users to grasp the essential concepts of data management in software development.',
          link: 'https://drive.google.com/drive/folders/1ntSnLeVDqd5hUX4Yn5gn7EkkVjVlqV9t?usp=drive_link', // Project link
          image: require('@/assets/constr.png'), // Adjust path if needed
        },
        {
          id: 2,
          title: 'You Lose Tic Tac Toe',
          description: 'This interactive project is a Tic Tac Toe game where the player competes against the computer. The game implements a strategy that ensures the computer always tries to win, making it a challenging experience for players. The project demonstrates my ability to apply algorithms and logic in game design, while also enhancing my skills in programming languages and frameworks used to develop engaging user interfaces.',
          link: 'https://drive.google.com/file/d/1G1ycfcp0pq1BW20iXolk1F7LBKSCcsp3/view?usp=sharing', // Project link
          image: require('@/assets/constr.png'), // Adjust path if needed
        },
        {
          id: 3,
          title: 'Basic Image Recognition',
          description: 'This project focuses on implementing a basic image recognition system using machine learning techniques. It demonstrates how images can be classified and recognized based on trained data sets. The project explores various algorithms used for image processing and highlights the practical applications of machine learning in real-world scenarios. Through this project, I have deepened my understanding of computer vision and its impact on technology.',
          link: 'https://drive.google.com/drive/folders/1jk_-nFXIMP41CnJjGTo8LTnfR213tpVB?usp=drive_link', // Project link
          image: require('@/assets/constr.png'), // Adjust path if needed
        },
      ],
    };
  },
};
</script>

<style scoped>
.showcase {
  padding: 20px;
  text-align: center;
}

.project-container {
  display: flex;
  flex-direction: column; /* Stack projects vertically */
  align-items: center; /* Center align items */
  gap: 30px; /* Space between projects */
}

.project {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  width: 80%; /* Adjust width as needed for better responsiveness */
  max-width: 600px; /* Set max width for larger screens */
  cursor: pointer;
  display: flex;
  flex-direction: column; /* Ensure vertical format */
  align-items: center; /* Center align items */
}

.project-link {
  text-decoration: none;
  color: inherit; /* Inherit text color */
  width: 100%; /* Full width of the project container */
}

.project-image {
  width: 100%; /* Full width of the project container */
  height: auto; /* Maintain aspect ratio */
}

.project-info {
  padding: 15px;
  text-align: left; /* Align text to left for better readability */
}

.project-title {
  font-size: 2rem; /* Increased font size */
  margin-bottom: 10px;
}

.project-description {
  font-size: 1.2rem; /* Increased font size */
  color: #666; /* Gray color for description */
  margin-bottom: 10px; /* Space below description */
}

.project-link-text {
  color: #007BFF; /* Link color */
  text-decoration: underline;
  font-weight: bold;
}
</style>
