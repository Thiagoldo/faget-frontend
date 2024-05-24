import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../Views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;