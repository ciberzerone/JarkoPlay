<template>
  <div class="app">
   
   
      <router-view /> <!-- Aquí se cargan las rutas dinámicamente -->
    
  </div>
</template>

<script>
import Home from './views/Home.vue'; // Asegúrate de tener un componente Navbar

export default {
  name: 'App'
  
};
</script>


