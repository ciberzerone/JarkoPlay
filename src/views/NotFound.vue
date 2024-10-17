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




  <div class="login-page">


            <div class="not-found">
                    <h1>404 - Página no encontrada</h1>
                    <p>Lo sentimos, la página que estás buscando no existe.</p>
                    <router-link to="/">Volver a la página principal</router-link>
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
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  .not-found {
  text-align: center;
  padding: 80px 20px;
  background-color: #f7f8fa; /* Fondo suave para un contraste más agradable */
  min-height: 100vh; /* Para ocupar toda la pantalla */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.not-found h1 {
  font-size: 72px; /* Tamaño de fuente mayor para destacar */
  margin-bottom: 20px;
  color: #ff4d4f; /* Mantén el color llamativo del título */
  font-weight: bold; /* Fuente más gruesa para mayor impacto */
  letter-spacing: 2px; /* Espaciado adicional entre letras */
  text-transform: uppercase; /* Letra mayúscula para darle más seriedad */
}

.not-found p {
  font-size: 20px; /* Aumenta el tamaño de la fuente */
  margin-bottom: 40px;
  color: #6c757d; /* Color de texto gris para mantener el foco en el título */
  max-width: 600px;
  line-height: 1.6; /* Aumenta el espacio entre líneas para mejor legibilidad */
}

.not-found a {
  text-decoration: none;
  background-color: #007bff; /* Azul clásico para botones */
  color: white;
  padding: 15px 30px;
  border-radius: 50px; /* Botón redondeado para un estilo más moderno */
  font-size: 18px; /* Fuente más grande para mejor visibilidad */
  font-weight: 500; /* Peso de fuente intermedio */
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3); /* Sombra para darle profundidad */
  transition: all 0.3s ease; /* Transición suave para efectos hover */
}

.not-found a:hover {
  background-color: #0056b3; /* Cambia a un azul más oscuro en hover */
  box-shadow: 0 6px 20px rgba(0, 86, 179, 0.4); /* Sombra más fuerte en hover */
  transform: translateY(-3px); /* Efecto de levantado en hover */
}

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
  