// src/store/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,  // Información del usuario
    isAuthenticated: false,  // Estado de autenticación
  }),
  actions: {
    login(userData) {
      this.user = userData
      this.isAuthenticated = true
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
    },
  },
  persist: true,  // Para que la sesión persista entre recargas
})
