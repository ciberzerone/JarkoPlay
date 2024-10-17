<template>
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
      <div class="footer-item highlight">
        Yarko PLAY
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  /* Footer */
  .footer {
    background-color: #222;
    color: white;
    padding: 20px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap; /* Asegura que el contenido se ajuste en pantallas pequeñas */
  }
  
  .footer-item {
    margin: 10px 0; /* Espacio vertical entre los items */
    font-size: 16px;
    cursor: pointer;
  }
  
  .footer-item a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease; /* Añade una transición suave */
  }
  
  .footer-item a:hover {
    color: #00d4ff;
    text-decoration: underline;
  }
  
  .highlight {
    color: #00d4ff;
    font-weight: bold;
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
    .footer {
      flex-direction: column; /* Alinea los elementos verticalmente en pantallas pequeñas */
    }
  }
  </style>
  