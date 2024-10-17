<template>
    <div class="admin-container">
      <h1>Panel de Administración - Películas</h1>
  
      <div class="movie-form">
        <h2>{{ editingMovie ? 'Editar Película' : 'Agregar Nueva Película' }}</h2>
        <form @submit.prevent="submitForm">
          <input v-model="movie.title" placeholder="Título" class="form-input" />
          <input v-model="movie.genre" placeholder="Género" class="form-input" />
          <input v-model="movie.release_date" type="date" class="form-input" />
          <textarea v-model="movie.description" placeholder="Descripción" class="form-input"></textarea>
          <input v-model="movie.poster_url" placeholder="URL del Póster" class="form-input" />
          <button type="submit" class="form-btn">{{ editingMovie ? 'Actualizar Película' : 'Agregar Película' }}</button>
        </form>
      </div>
  
      <div class="movie-list">
        <h2>Listado de Películas</h2>
        <ul>
          <li v-for="(m, index) in movies" :key="m.id">
            <strong>{{ m.title }}</strong> - {{ m.genre }} - {{ formatDate(m.release_date) }}
            <button @click="editMovie(m)" class="edit-btn">Editar</button>
            <button @click="deleteMovie(m.id)" class="delete-btn">Eliminar</button>
          </li>
        </ul>
      </div>
  
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { supabase } from '../supabase'
  
  export default {
    name: 'Admin',
    setup() {
      const movie = ref({
        title: '',
        genre: '',
        release_date: '',
        description: '',
        poster_url: ''
      })
      const movies = ref([])
      const error = ref('')
      const editingMovie = ref(false)
      const movieId = ref(null)
  
      // Obtener la lista de películas al montar el componente
      onMounted(async () => {
        await fetchMovies()
      })
  
      const fetchMovies = async () => {
        const { data, error: fetchError } = await supabase.from('movies').select('*')
        if (fetchError) {
          error.value = fetchError.message
        } else {
          movies.value = data
        }
      }
  
      // Función para agregar o editar películas
      const submitForm = async () => {
        if (editingMovie.value) {
          // Actualizar película existente
          const { error: updateError } = await supabase
            .from('movies')
            .update({ ...movie.value })
            .eq('id', movieId.value)
          
          if (updateError) {
            error.value = updateError.message
          } else {
            resetForm()
            await fetchMovies()
          }
        } else {
          // Agregar nueva película
          const { error: insertError } = await supabase.from('movies').insert([{ ...movie.value }])
          if (insertError) {
            error.value = insertError.message
          } else {
            resetForm()
            await fetchMovies()
          }
        }
      }
  
      // Función para eliminar película
      const deleteMovie = async (id) => {
        const { error: deleteError } = await supabase.from('movies').delete().eq('id', id)
        if (deleteError) {
          error.value = deleteError.message
        } else {
          await fetchMovies()
        }
      }
  
      // Función para editar película
      const editMovie = (m) => {
        movie.value = { ...m }
        movieId.value = m.id
        editingMovie.value = true
      }
  
      // Función para reiniciar el formulario
      const resetForm = () => {
        movie.value = {
          title: '',
          genre: '',
          release_date: '',
          description: '',
          poster_url: ''
        }
        editingMovie.value = false
        movieId.value = null
      }
  
      const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('es-ES', options)
      }
  
      return {
        movie,
        movies,
        error,
        editingMovie,
        submitForm,
        deleteMovie,
        editMovie,
        resetForm,
        formatDate
      }
    }
  }
  </script>
  
  <style scoped>
  .admin-container {
    padding: 40px;
    background-color: #1a1a1a;
    color: white;
    border-radius: 10px;
    max-width: 900px;
    margin: auto;
  }
  
  h1, h2 {
    color: #ffffff;
  }
  
  .movie-form, .movie-list {
    margin-bottom: 30px;
  }
  
  .form-input {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: none;
    background-color: #333;
    color: white;
  }
  
  .form-btn {
    background-color: #1a73e8;
    color: white;
    padding: 12px 20px;
    font-size: 1.2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .form-btn:hover {
    background-color: #155bb5;
  }
  
  .movie-list ul {
    list-style: none;
    padding: 0;
  }
  
  .movie-list li {
    margin-bottom: 15px;
  }
  
  .edit-btn, .delete-btn {
    margin-left: 15px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
  }
  
  .edit-btn {
    background-color: #1a73e8;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .edit-btn:hover {
    background-color: #155bb5;
  }
  
  .delete-btn {
    background-color: #ff4d4d;
    color: white;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .delete-btn:hover {
    background-color: #cc3a3a;
  }
  
  .error-message {
    color: #ff4d4d;
    margin-top: 15px;
  }
  </style>
  