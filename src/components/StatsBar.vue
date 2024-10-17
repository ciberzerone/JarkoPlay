<template>
    <div class="stats-bar">
      <div v-for="(stat, index) in stats" :key="index" :style="{ height: stat + 'px' }" class="bar"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "StatsBar",
    data() {
      return {
        stats: [50, 100, 75, 150, 90, 120] // Ejemplo de datos de altura
      }
    }
  }
  </script>
  
  <style scoped>
  .stats-bar {
    display: flex;
    align-items: flex-end;
    height: 200px;
    background-color: #f0f0f0;
    padding: 10px;
  }
  .bar {
    width: 30px;
    background-color: #1a73e8;
    margin-right: 10px;
    transition: height 0.3s ease;
  }
  .bar:hover {
    background-color: #155bb5;
  }
  </style>
  