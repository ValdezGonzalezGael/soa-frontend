import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import ListPage from '../views/List.vue'
import RoleForm from '../views/RoleForm.vue'
import ProductForm from '../views/CreateProducts.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/lista',
    name: 'List',
    component: ListPage
  },
  {
    path: '/agregar-rol',
    name: 'roleform',
    component: RoleForm
  },
  {
    path: '/agregar-producto',
    name: 'productform',
    component: ProductForm
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
