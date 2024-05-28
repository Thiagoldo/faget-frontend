import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import TerceirizadoPage from '../pages/TerceirizadosPage.vue'
import CreateUpdateTerceirizado from '../components/CreateUpdateTerceirizado.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  { path: '/home', component: HomePage },
  { path: '/terceirizados', component: TerceirizadoPage },
  { path: '/terceirizados/new', component: CreateUpdateTerceirizado },
  { path: '/terceirizados/:id', component: CreateUpdateTerceirizado },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;