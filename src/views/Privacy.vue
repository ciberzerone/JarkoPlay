<template>
      <!-- Cabecera fija en la parte superior -->
  <div class="hero-wrapper">
                <Header/>
  </div>
  
  <div class="login-page">
    
    
    <div class="privad">
      <h1>Privacy Policy</h1>
      <p>Esta es la política de privacidad...</p>
    </div>
    <Footer/>

  </div>
  </template>
  <script setup>
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  </script>
  <script>
  export default {
    name: 'Privacy',
  };
  </script>

 <style scoped>
.privad {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: bluetblue;
  text-align: center;
  padding-top: 150px;
}


.login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

</style>