<template>
    <button class="signup-btn">SIGN UP</button>
  </template>
  
  <script>
  export default {
    name: "SignupButton",
  }
  </script>
  
  <style scoped>
  .signup-btn {
    background-color: #1a73e8;
    color: white;
    padding: 15px 30px;
    font-size: 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .signup-btn:hover {
    background-color: #155bb5;
  }
  </style>
  