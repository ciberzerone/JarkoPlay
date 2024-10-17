<template>
    <header class="header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 20px;
    color: white;
  }
  nav ul {
    display: flex;
    list-style: none;
  }
  nav ul li {
    margin-right: 20px;
  }
  nav ul li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  </style>
  