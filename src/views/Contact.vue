<template>
    <div class="contact">
      <h1>Contact Us</h1>
      <p>¿Tienes alguna pregunta o necesitas ayuda? ¡Contáctanos!</p>
      <form @submit.prevent="sendMessage">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input id="name" v-model="name" placeholder="Tu nombre" required />
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input id="email" v-model="email" type="email" placeholder="Tu correo" required />
        </div>
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea id="message" v-model="message" placeholder="Tu mensaje" required></textarea>
        </div>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Contact',
    setup() {
      const name = ref('');
      const email = ref('');
      const message = ref('');
  
      const sendMessage = () => {
        console.log(`Nombre: ${name.value}, Correo: ${email.value}, Mensaje: ${message.value}`);
        // Aquí puedes añadir lógica para enviar el mensaje a un servidor o servicio de correo
      };
  
      return { name, email, message, sendMessage };
    },
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
    max-width: 600px;
    margin: auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  form label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  form input,
  form textarea {
    width: 100%;
    padding: 8px;
    font-size: 14px;
  }
  
  button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  