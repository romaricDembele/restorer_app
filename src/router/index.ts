import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
// import ArticlesView from '@/views/ArticlesView.vue';
// import DeliveriesView from '@/views/DeliveriesView.vue';
// import MenusView from '@/views/MenusView.vue';
// import NotificationCenterView from '@/views/NotificationCenterView.vue';
// import OrderHistoryView from '@/views/OrderHistoryView.vue';
// import OrdersView from '@/views/OrdersView.vue';
// import StatisticsView from '@/views/StatisticsView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/AccountView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('@/views/ArticlesView.vue')
  },
  {
    path: '/deliveries',
    name: 'deliveries',
    component: () => import('@/views/DeliveriesView.vue')
  },
  {
    path: '/menus',
    name: 'menus',
    component: () => import('@/views/MenusView.vue')
  },
  {
    path: '/notification-center',
    name: 'notification-center',
    component: () => import('@/views/NotificationCenterView.vue')
  },
  {
    path: '/order-history',
    name: 'order-history',
    component: () => import('@/views/OrderHistoryView.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/views/OrdersView.vue')
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('@/views/StatisticsView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
