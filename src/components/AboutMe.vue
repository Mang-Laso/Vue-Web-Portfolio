<template>
  <div class="about-me">
    <h1>About Me</h1>
    <div class="profile-section">
      <div class="profile-info">
        <div class="info-group">
          <p>
            Hi, I'm Hans, a 4th year Computer Engineering student. I'm passionate about data science and enjoy hardware tinkering. My journey in engineering has shaped my approach to solving problems, and I love diving deep into both software and hardware projects.
          </p>
          <p>
            Having served as Vice President of the Computer Engineering Department Student Council in 2022 and Treasurer of the Microsoft Student Community in 2023, I have gained significant leadership experience and honed my communication and organizational skills. These roles have allowed me to successfully manage team dynamics, coordinate events, and represent my peers in various capacities. 
          </p>
          <p>
            As a Student Career Ambassador, I am excited to leverage these experiences to help bridge the gap between students and their career aspirations. What excites me most about this role is the opportunity to be part of a network that fosters collaboration between students and industry professionals. The access to career workshops, events, and networking opportunities will not only benefit me but will also enable me to guide my peers in navigating their own career paths.
          </p>
          <p>
            I am passionate about helping others and believe that, through this role, I can inspire fellow students to make informed career decisions. With my background in leadership, strong interpersonal skills, and ability to generate creative solutions, I am confident in my ability to contribute to the success of the Career Center. The recognition and responsibility that come with this position will push me to excel even further in my academic and extracurricular endeavors.
          </p>
        </div>

        <!-- Add name, title, and avatar here -->
        <div class="bio-footer">
          <img src="@/assets/avatar.png" alt="Hans' Avatar" class="avatar" />
          <h2 class="name">Hans Stephen Lumasang</h2>
          <p class="title">4th Year, Computer Engineering Student - Data Science Elective</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// No need to import ref or create biography variable if not used.
</script>

<style scoped>
.about-me {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none; /* Remove background color */
  padding: 50px;
  height: auto; /* Adjust height to fit content */
  color: black; /* Change text color for better visibility */
}

h1 {
  color: #333; /* Darker heading for better visibility */
  margin-bottom: 20px;
  text-align: center;
  font-size: 2.5rem; /* Increased font size */
  letter-spacing: 1.5px;
}

.profile-section {
  padding: 30px;
  border-radius: 10px; /* Optional: Rounded corners */
  max-width: 800px;
  width: 100%;
  background: none; /* No background */
}

.profile-info {
  text-align: left; /* Align text to the left for better readability */
  color: #555; /* Dark gray for readability */
}

.info-group {
  margin-bottom: 1.5rem;
}

/* Avatar styles */
.avatar {
  width: 100px; /* Adjust the size of the avatar */
  height: 100px; /* Ensure it maintains a circular shape */
  border-radius: 50%; /* Make it circular */
  object-fit: cover; /* Ensure the image covers the area without stretching */
  margin-bottom: 10px; /* Space between the avatar and the text */
}

/* Footer styles */
.bio-footer {
  text-align: center; /* Center align the footer content */
  margin-top: 30px; /* Space above the footer */
}

.name {
  font-size: 1.5rem; /* Increased font size for the name */
  color: #333; /* Darker color for name */
  margin: 10px 0; /* Space above and below the name */
}

.title {
  font-size: 1.2rem; /* Increased font size for title */
  color: #777; /* Gray color for the title */
}

/* Adjust paragraph font size */
.info-group p {
  font-size: 1.2rem; /* Increased font size for biography text */
  line-height: 1.6; /* Improved line height for readability */
}
</style>
