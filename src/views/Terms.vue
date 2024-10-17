
<template>
  <!-- Cabecera fija en la parte superior -->
  <div class="hero-wrapper">
    <header class="navbar">
      <nav class="nav-menu">
        <router-link to="/">Home</router-link>
        <router-link to="/movies">Movies</router-link>
        <router-link to="/register">Registration</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
  </div>

  <!-- Contenido principal -->
  <div class="login-page">
    <div class="content-left">
      <h1>Yarko<span class="highlight">PLAY</span></h1>
    </div>
    <div class="terms-content">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to YarkoPLAY. These terms and conditions outline the rules and regulations for the use of our platform.
        Please read them carefully before using our services.
      </p>
      <p>
        If you have any questions or concerns about our terms, feel free to <router-link to="/contact">contact us</router-link>.
      </p>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-item">
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="footer-item">
        <router-link to="/about">About</router-link>
      </div>
      <div class="footer-item">
        <router-link to="/terms">Terms</router-link>
      </div>
      <div class="footer-item">
        <router-link to="/privacy">Privacy</router-link>
      </div>
      <div class="footer-item">
        <router-link to="/legal">Legal</router-link>
      </div>
      <div class="footer-item">
        <span class="highlight">Yarko<span class="highlight">PLAY</span></span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Terms',
};
</script>


<style scoped> 
.login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  padding: 60px 20px;
}

.terms-content {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 50px auto;
}

.terms-content h1 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.terms-content p {
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

.terms-content a {
  color: #007bff;
  text-decoration: none;
}

.terms-content a:hover {
  text-decoration: underline;
}

/* Hero Wrapper */
.hero-wrapper {
  position: relative;
  z-index: 2;
}

/* Cabecera */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  padding: 10px 20px;
  transition: background-color 0.3s ease;
  border-radius: 5px;
}

.nav-menu a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* Footer */
.footer {
  background-color: #222;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

.footer-item {
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
}

.footer-item a {
  color: white;
  text-decoration: none;
}

.footer-item:hover a {
  color: #00d4ff; /* Color de hover */
  text-decoration: underline; /* Subrayado al pasar el cursor */
}

.highlight {
  color: #00d4ff;
  font-weight: bold;
}

/* Ajustes generales */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  background-color: #f0f0f5; /* Fondo de la página */
  font-family: 'Roboto', sans-serif;
}
</style>