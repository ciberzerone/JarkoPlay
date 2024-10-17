<template>
    <div class="movie-details">
      <div class="poster-container">
        <img :src="movie.poster_url" alt="Poster de la película" class="movie-poster" />
      </div>
      <div class="movie-info">
        <h1 class="movie-title">{{ movie.title }}</h1>
        <p class="movie-genre">{{ movie.genre }}</p>
        <p class="movie-release">Lanzamiento: {{ formatDate(movie.release_date) }}</p>
        <p class="movie-description">{{ movie.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  import { useRoute } from 'vue-router'
  
  export default {
    name: 'MovieDetails',
    setup() {
      const movie = ref({})
      const route = useRoute()
  
      onMounted(async () => {
        const { data, error } = await supabase
          .from('movies')
          .select('*')
          .eq('id', route.params.id)
          .single()
  
        if (error) {
          console.error('Error al obtener detalles de la película:', error)
        } else {
          movie.value = data
        }
      })
  
      const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('es-ES', options)
      }
  
      return { movie, formatDate }
    },
  }
  </script>
  
  <style scoped>
  .movie-details {
    display: flex;
    flex-direction: row;
    background-color: #1a1a1a;
    color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    margin: auto;
    margin-top: 50px;
    max-width: 900px;
  }
  
  .poster-container {
    flex: 1;
  }
  
  .movie-poster {
    max-width: 100%;
    border-radius: 10px;
  }
  
  .movie-info {
    flex: 2;
    padding-left: 30px;
  }
  
  .movie-title {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  
  .movie-genre {
    font-size: 1.2rem;
    color: #1a73e8;
    margin-bottom: 10px;
  }
  
  .movie-release {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: #888;
  }
  
  .movie-description {
    font-size: 1.2rem;
    line-height: 1.5;
  }
  </style>
  