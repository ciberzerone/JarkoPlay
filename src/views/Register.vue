<template>
  <div class="register-container">
    <h1>Regístrate en YarkoPlay</h1>
    <form @submit.prevent="registerUser" class="register-form">
      <input v-model="email" type="email" placeholder="Correo Electrónico" class="form-input" />
      <input v-model="password" type="password" placeholder="Contraseña" class="form-input" />
      <button type="submit" class="register-btn">Crear cuenta</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'

export default {
  name: 'Register',
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref('')

    const registerUser = async () => {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      })
      if (signUpError) {
        error.value = signUpError.message
      } else {
        console.log('Usuario registrado con éxito')
      }
    }

    return { email, password, registerUser, error }
  },
}
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  margin: auto;
  margin-top: 50px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ffffff;
}

.register-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-input {
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #333;
  color: white;
}

.register-btn {
  background-color: #1a73e8;
  color: white;
  padding: 12px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.register-btn:hover {
  background-color: #155bb5;
}

.error-message {
  color: #ff4d4d;
  margin-top: 15px;
}
</style>
