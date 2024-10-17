<template> 
  <!-- Cabecera fija en la parte superior -->
  <div class="hero-wrapper">
    <Header />  <!-- El componente Header se usa directamente sin necesidad de exportarlo manualmente -->
  </div>

  <!-- Contenido principal de la página de contacto -->
  <div class="login-page">
    <div class="contact-container">
      <h1>Contáctanos</h1>
      <p>¿Tienes alguna pregunta o necesitas ayuda? ¡Nos encantaría escucharte!</p>
      <form @submit.prevent="sendMessage">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input id="name" v-model="name" type="text" placeholder="Escribe tu nombre" required />
        </div>

        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input id="email" v-model="email" type="email" placeholder="Escribe tu correo electrónico" required />
        </div>

        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" v-model="message" placeholder="Escribe tu mensaje" required></textarea>
        </div>

        <button type="submit" class="submit-btn">Enviar mensaje</button>
      </form>
    </div>

    <Footer />  <!-- El componente Footer se usa directamente -->
  </div>
</template>

<script setup>
import { ref } from 'vue';  // Importación de `ref` para manejar los datos reactivamente
import Header from '../components/Header.vue';  // Importa el componente Header
import Footer from '../components/Footer.vue';  // Importa el componente Footer

// Variables reactivas para el formulario
const name = ref('');
const email = ref('');
const message = ref('');

// Función para enviar el mensaje
const sendMessage = () => {
  console.log(`Nombre: ${name.value}, Correo: ${email.value}, Mensaje: ${message.value}`);
  // Aquí puedes añadir lógica para enviar el mensaje a un servidor o servicio de correo
};
</script>

<style scoped>
/* Estilos generales */
.contact-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #666;
}

/* Estilos del formulario */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #007BFF;
  outline: none;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

/* Estilos del botón */
.submit-btn {
  width: 100%;
  padding: 15px;
  background-color: #007BFF;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.submit-btn:active {
  background-color: #00408a;
  transform: translateY(0);
}

/* Adaptaciones para pantallas pequeñas */
@media (max-width: 768px) {
  .contact-container {
    padding: 20px;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
