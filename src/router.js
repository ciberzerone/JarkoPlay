import { createRouter, createWebHistory } from 'vue-router';

// Definimos las rutas de la aplicación
const routes = [
  { path: '/', redirect: '/home' },  // Redirige la raíz al home
  { 
    path: '/home', 
    name: 'Home', 
    component: () => import('./views/Home.vue'),
  },  // Página principal

  { 
    path: '/login', 
    name: 'Login', 
    component: () => import('./views/Login.vue'),
  },  // Página de Login

  { 
    path: '/register', 
    name: 'Register', 
    component: () => import('./views/Register.vue'),
  },  // Registro de Usuarios

  { 
    path: '/movie/:id', 
    name: 'MovieDetails', 
    component: () => import('./views/MovieDetails.vue'),
    props: true,  // Permitir pasar 'id' como parámetro a la vista MovieDetails
  },  // Detalles de una película específica

  { 
    path: '/admin', 
    name: 'Admin', 
    component: () => import('./views/Admin.vue'),
    meta: { requiresAuth: true },  // Ejemplo: requiere autenticación
  },  // Página de administración

  { 
    path: '/about', 
    name: 'About', 
    component: () => import('./views/About.vue'),
  },  // Página About Us

  { 
    path: '/contact', 
    name: 'Contact', 
    component: () => import('./views/Contact.vue'),
  },  // Página Contacto

  { 
    path: '/terms', 
    name: 'Terms', 
    component: () => import('./views/Terms.vue'),
  },  // Página Términos y Condiciones

  { 
    path: '/privacy', 
    name: 'Privacy', 
    component: () => import('./views/Privacy.vue'),
  },  // Página Política de Privacidad

  { 
    path: '/legal', 
    name: 'Legal', 
    component: () => import('./views/Legal.vue'),
  },  // Página Información Legal

  // Ruta para manejar cualquier página no encontrada (404)
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('./views/NotFound.vue'),
  },  // Página de error 404
];

// Configuración del router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
