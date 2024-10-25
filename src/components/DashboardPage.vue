<template>
  <div class="dashboard">
    <header class="header-topbar">
      <h1 class="title">Hans' Portfolio</h1>
      <nav class="topbar">
        <ul>
          <li><router-link to="/dashboard/about">About Me</router-link></li>
          <li><router-link to="/dashboard/showcase">Showcase</router-link></li>
          <li><router-link to="/dashboard/contact">Contact</router-link></li>
          <li><router-link to="/dashboard/creative">Creative</router-link></li>
          <li class="logout"><button @click="logout">Logout</button></li>
        </ul>
      </nav>
    </header>
    
    <main class="content">
      <router-view></router-view> <!-- Loads child components based on the route -->
    </main>
  </div>
</template>

<script>
export default {
  name: 'DashboardPage',
  methods: {
    logout() {
      this.$router.push('/'); // Redirect to login page
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  font-family: 'Open Sans', sans-serif;
  background-color: #FAF9F6;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}

.header-topbar {
  width: 100%;
  background-color: #e0e0e0;
  padding: 15px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 2rem;
  color: #333;
}

.topbar ul {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.topbar ul li {
  margin-right: 15px;
}

.topbar ul li a {
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.topbar ul li a:hover {
  background-color: #d3d3d3;
}

.logout {
  margin-left: auto; /* Aligns logout button to the right */
}

.logout button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout button:hover {
  background-color: #c0392b;
}

.content {
  margin-top: 120px; /* Adjust for fixed header */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .topbar ul li {
    margin-right: 10px;
  }
}
</style>
