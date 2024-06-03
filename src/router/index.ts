import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import TerceirizadoPage from '../pages/TerceirizadosPage.vue'
import CreateUpdateTerceirizado from '../components/CreateUpdateTerceirizado.vue'
import CreateUpdateEmpresas from '../components/CreateUpdateEmpresas.vue'
import EmpresasPage from '../pages/EmpresasPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/', redirect: '/login', children: [
      { path: 'home', component: HomePage },

      { path: 'terceirizados', component: TerceirizadoPage },
      { path: 'terceirizados/new', component: CreateUpdateTerceirizado },
      { path: 'terceirizados/:id', component: CreateUpdateTerceirizado },

      { path: 'empresas', component: EmpresasPage },
      { path: 'empresas/new', component: CreateUpdateEmpresas },
      { path: 'empresas/:id', component: CreateUpdateEmpresas },
    ]
  },
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;