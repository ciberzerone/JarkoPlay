// src/store/movie.js
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [],  // Lista de películas
    genres: [],  // Lista de géneros
  }),
  actions: {
    setMovies(movieData) {
      this.movies = movieData
    },
    setGenres(genreData) {
      this.genres = genreData
    },
  },
})
