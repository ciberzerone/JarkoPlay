<template>
    <nav class="nav-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/movies">Movies</router-link>
      <router-link to="/register">Registration</router-link>
      <router-link to="/about">About Us</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavMenu',
  };
  </script>
  
  <style scoped>
  .nav-menu {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    padding: 10px;
  }
  
  .nav-menu a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  .nav-menu a:hover {
    color: #ddd;
  }
  </style>
  