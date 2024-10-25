<template>
  <footer class="footer">
    <p>&copy; Hans Lumasang | T.I.P. MANILA 21-XXXXX</p>
    <nav class="footer-nav" aria-label="Footer Navigation">
      <ul>
        <li><router-link to="/dashboard/about" aria-label="About Me">About Me</router-link></li>
        <li><router-link to="/dashboard/showcase" aria-label="Showcase">Showcase</router-link></li>
        <li><router-link to="/dashboard/contact" aria-label="Contact">Contact</router-link></li>
        <li><router-link to="/dashboard/creative" aria-label="Creative">Creative</router-link></li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
.footer {
  background-color: #e0e0e0; 
  color: #333; 
  padding: 1rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-nav {
  margin-top: 0.5rem;
}

.footer-nav ul {
  list-style-type: none; 
  padding: 0; 
  margin: 0; 
  display: flex; 
  justify-content: center; 
}

.footer-nav li {
  margin: 0 1rem; 
}

.footer-nav a {
  color: #333; 
  text-decoration: none; 
  font-weight: 600; 
}

.footer-nav a:hover {
  text-decoration: underline; 
}
</style>
