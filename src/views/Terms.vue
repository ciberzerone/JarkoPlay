
<template>
  <!-- Cabecera fija en la parte superior -->
  <div class="hero-wrapper">
                <Header/>
  </div>
  
       
  <!-- Contenido principal -->
  <div class="login-page">
    
    <div class="terms-content">
      <div class="content-left">
      <h1>Yarko<span class="highlight">PLAY</span></h1>
    </div>
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
        <Footer/>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

</script>


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

.login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

</style>