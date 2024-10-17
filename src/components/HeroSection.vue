<template>
    <section class="hero">
      <div class="branding">
        <h1>YarkoPLAY</h1>
        <p>¡Regístrate para acceder a una gran colección de películas y series!</p>
        <SignupButton />
      </div>
      <div class="hero-image">
        
      </div>
    </section>
  </template>
  
  <script>
  import SignupButton from './SignupButton.vue'
  
  export default {
    name: "HeroSection",
    components: {
      SignupButton
    }
  }
  </script>
  
  <style scoped>
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    background-color: #1a1a1a;
    color: white;
  }
  .branding h1 {
    font-size: 4rem;
  }
  .hero-image img {
    max-width: 100%;
    border-radius: 10px;
  }
  </style>
  