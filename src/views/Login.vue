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
    <!-- Si el usuario ha iniciado sesión, mostramos el mensaje de bienvenida -->
    <div v-if="isLoggedIn" class="welcome-message">
      <h1>Bienvenido a YarkoPlay, {{ name }}!</h1>
    </div>

    <!-- Formulario de login si el usuario no está autenticado -->
    <div v-else class="login-container">
      <div class="content-left">
        <h1>Yarko<span class="highlight">PLAY</span></h1>
      </div>   
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" id="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input v-model="password" type="password" id="password" placeholder="Contraseña" required />
        </div>
        <button type="submit" class="login-btn">Ingresar</button>
      </form>
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
        <span class="highlight"> Yarko PLAY</span>
      </div>
    </footer>
  </div>
</template>
<script>
import { ref } from 'vue';
import { supabase } from '../supabase'; // Importa la configuración de Supabase

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const isLoggedIn = ref(false); // Para manejar el estado de autenticación
    const username = ref(''); // Guardar el nombre de usuario después de iniciar sesión
    const loginError = ref(null); // Para manejar los errores

    const login = async () => {
      try {
        console.log('Iniciando sesión con:', email.value);

        // Autenticación usando Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.value,  // Asegúrate de que el correo está correcto
          password: password.value, // Asegúrate de que la contraseña está en texto plano
        });

        if (error) {
          console.error('Error durante el inicio de sesión:', error.message);
          loginError.value = error.message; // Mostrar mensaje de error detallado
        } else {
          // Inicio de sesión exitoso, extraemos el correo del usuario
          username.value = email.value.split('@')[0]; // Nombre de usuario a partir del correo
          isLoggedIn.value = true; // El usuario ahora está autenticado
          console.log('Sesión iniciada con éxito:', data);
          loginError.value = null; // Borrar el error si la autenticación es exitosa
        }
      } catch (error) {
        console.error('Error durante el inicio de sesión:', error.message);
        loginError.value = 'Error inesperado al iniciar sesión. Inténtalo de nuevo.';
      }
    };

    return { email, password, login, isLoggedIn, username, loginError };
  },
};
</script>


<style scoped> 

.login-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
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
  background-color: rgba(0, 0, 0, 0.8);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.nav-menu {
  display: flex;
  gap: 30px;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
}

.login-btn {
  background-color: #00d4ff;
  border: none;
  text-align: center;
  border-radius: 25px;
  color: black;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background-color: #00d4ff;
}

/* Contenedor del formulario */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  margin-top: 120px; /* Espacio para la cabecera */
}

.login-form {
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 350px;
  text-align: left;
  transition: transform 0.3s ease;
}

.login-form:hover {
  transform: translateY(-5px); /* Efecto sutil al pasar el cursor */
}

.form-group {
  margin-bottom: 20px;
}

input {
  padding: 15px;
  font-size: 16px;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  margin-top: 10px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  padding: 15px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 18px;
  width: 100%;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

/* Footer */
.footer {
  background-color: #222;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-around;
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