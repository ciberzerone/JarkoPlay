import { createClient } from '@supabase/supabase-js'

// Reemplaza estas variables con los valores de tu Supabase
const supabase_url = 'https://nircfkdxlagficpmjjjq.supabase.co'
const supabase_anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pcmNma2R4bGFnZmljcG1qampxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MjA0NDYsImV4cCI6MjA0NDI5NjQ0Nn0.fiM-yQHNTPlSIlZlBiW6YmCJjHRkxFEa9i0Fq8EP0FI'

// Validar que no estén vacías
if (!supabase_url || !supabase_anon_key) {
  throw new Error('La URL de Supabase y la clave anónima son requeridas')
}

// Crea el cliente de Supabase
export const supabase = createClient(supabase_url, supabase_anon_key)
