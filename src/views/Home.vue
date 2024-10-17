<template>
  <div class="container">
    <div class="content-block">
      <div class="hero-wrapper">
        <!-- Video de fondo cubre tanto la barra de navegación como la sección principal -->
        <video autoplay muted loop id="background-video" ref="backgroundVideo" class="background-video">
          <source src="/movie-trailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

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
                        <div class="controls">
                          <button class="control-btn" @click="rewindVideo">⏮</button>
                          <button class="control-btn" @click="pausePlayVideo">⏯</button>
                          <button class="control-btn" @click="forwardVideo">⏭</button>
                        </div>
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
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    rewindVideo() {
      const video = this.$refs.backgroundVideo;
      video.currentTime -= 10;
    },
    pausePlayVideo() {
      const video = this.$refs.backgroundVideo;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
    forwardVideo() {
      const video = this.$refs.backgroundVideo;
      video.currentTime += 10;
    },

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


