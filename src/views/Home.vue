<template>
  <div class="container">
    <div class="content-block">
      <div class="hero-wrapper">
        <!-- Video de fondo cubre tanto la barra de navegación como la sección principal -->
        
        <div class="video-container">
    <iframe 
      src="https://player.vimeo.com/video/1020562524?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
      
      style="position:absolute;top:0;left:0;width:100%;height:100%;" 
      title="lv_0_20241015024028">
    </iframe>
  </div>
        <!-- Barra de Navegación Superior -->
        <header class="navbar">
          
          <nav class="nav-menu">
    <router-link to="/">Home</router-link>
    <router-link to="/movies">Movies</router-link>
    <router-link to="/register">Registration</router-link>
    <router-link to="/about">About Us</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
          
          <button class="login-btn" @click="navigateToLogin">LOGIN</button>
        </header>

        <!-- Sección Principal -->
        <section class="hero-section">
          <div class="overlay">
                  <div class="content-left">
                        <h1>Yarko<span class="highlight">PLAY</span></h1>
                        <p class="tagline">Where you can own your entertainment.</p>
                        <p class="subtext">
                                Your personalized entertainment experience awaits. Get ready for exclusive content.
                        </p>
                        <button class="btn-signup" @click="navigateToRegister">SIGN UP</button>
                                <!-- Modal para el formulario de registro -->
                        
                  </div>
            </div>
        </section>
      </div>

      <!-- Sección de Catálogo con fondo negro -->
      <main class="catalog-section">
        <div>
          <Catalog />
        </div>
      </main>

      <!-- Menú Inferior -->
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
      Yarko<span class="highlight">PLAY</span>
    </div>
  </footer>
    </div>
  </div>
</template>

<script>
import Catalog from '../components/Catalog.vue';
import SignupButton from '../components/SignupButton.vue';

export default {
  components: {
    Catalog,
    SignupButton
  },
  mounted() {
    try {
    // Cargar el script de Vimeo (si es necesario)
    const vimeoScript = document.createElement('script');
    vimeoScript.src = "https://player.vimeo.com/api/player.js";
    document.body.appendChild(vimeoScript);

    console.log("Script de Vimeo cargado exitosamente");
  } catch (error) {
    console.error("Error en mounted hook:", error);
  }
},
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
        navigateToLogin() {
    this.$router.push('/login')
  },
  
  navigateToRegister() {
    this.$router.push('/Register')
  },

    openSignUpModal() {
      this.isModalOpen = true;
    },
    closeSignUpModal() {
      this.isModalOpen = false;
    },
  }
};
</script>

<style>
.background-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que el video cubra toda el área sin distorsión */
}
</style>



