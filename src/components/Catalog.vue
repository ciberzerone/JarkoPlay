<template>
    <section class="catalog-container">
      
      <div class="movies-list">
        <div v-for="(movie, index) in movies" :key="index" class="movie-card">
          <img :src="movie.image" :alt="movie.title" class="movie-poster" />
          <div class="movie-details">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.genre }}</p>
            <div class="rating">
              <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= movie.rating }">★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  const movies = [
    { title: "Titanic", genre: "Drama", rating: 4, image: "/images/titanic.jpeg" },
    { title: "Matrix", genre: "Adventure", rating: 5, image: "/images/Matrix.jpg" },
    { title: "Back to the future", genre: "Action", rating: 3, image: "/images/future.jpg" },
    { title: "The Bodyguard", genre: "Drama", rating: 4, image: "/images/bodyguard.jpg" },
    { title: "Fast & Furious", genre: "Sci-Fi", rating: 5, image: "/images/fast.jpg" }
  ];
  </script>
  
  <style scoped>
  .catalog-container {
    text-align: center;
    padding: 20px;
  }
  
  .movies-list {
    display: flex;
    justify-content: center;
    gap: 20px;
    overflow-x: hidden;
    overflow-y: hidden;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
  }
  
  .movie-card {
    width: 180px;
    background-color: #1c1c1c;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  .movie-poster {
    width: 100%;
    border-radius: 8px;
  }
  
  .movie-details {
    text-align: left;
    padding: 10px 0;
  }
  
  .movie-details h3 {
    margin: 5px 0;
    font-size: 18px;
  }
  
  .movie-details p {
    margin: 0;
    font-size: 14px;
  }
  
  .rating {
    display: flex;
    gap: 3px;
  }
  
  .star {
    color: #d3d3d3;
  }
  
  .star.filled {
    color: #ffcc00;
  }
  </style>
  