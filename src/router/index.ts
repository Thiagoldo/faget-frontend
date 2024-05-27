import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import TerceirizadoPage from '../pages/TerceirizadosPage.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/home', component: HomePage },
  { path: '/terceirizados', component: TerceirizadoPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;