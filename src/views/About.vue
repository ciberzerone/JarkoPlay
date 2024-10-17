<template>
  <!-- Cabecera fija en la parte superior -->
  <div class="hero-wrapper">

                 <Header/>
</div>

  
  <div class="login-page">

    
                <div class="about">
                    <div class="content-left">
                            <h1>Yarko<span class="highlight">PLAY</span></h1>
                          </div>  
                <h1>About Us</h1>
                <p>Somos YarkoPLAY, una plataforma de entretenimiento personalizada que te ofrece acceso exclusivo a tus películas y programas favoritos.</p>
                <p>Nuestra misión es brindarte una experiencia única y completamente personalizable, donde tú eres quien decide qué ver y cuándo verlo.</p>
                </div>

                <Footer/>
  </div>


  </template>
  
  <script setup>
  import { ref } from 'vue'; 
  import  Header  from '../components/Header.vue';
  import  Footer  from "../components/Footer.vue";

  </script>
  
  <style scoped>
  .about {
    padding: 200px;
    text-align: center;
  }
  
  .about h1 {
    color: #333;
  }
  
  .about p {
    font-size: 16px;
    line-height: 1.6;
  }

  .login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}


</style>
  