import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../pages/HomePage.vue'), meta: { title: 'Home' } },
  { path: '/why-licensed', name: 'why', component: () => import('../pages/WhyLicensedPage.vue'), meta: { title: 'Why Licensed?' } },
  { path: '/history', name: 'history', component: () => import('../pages/HistoryPage.vue'), meta: { title: 'History' } },
  { path: '/regulations', name: 'regulations', component: () => import('../pages/RegulationsPage.vue'), meta: { title: 'Regulations' } },
  { path: '/resources', name: 'resources', component: () => import('../pages/ResourcesPage.vue'), meta: { title: 'Resources' } },
  { path: '/join', name: 'join', component: () => import('../pages/JoinPage.vue'), meta: { title: 'Join the Effort' } },
  { path: '/verify', name: 'verify', component: () => import('../pages/VerifyPage.vue'), meta: { title: 'Verify a License' } },
  { path: '/contact', name: 'contact', component: () => import('../pages/ContactPage.vue'), meta: { title: 'Contact' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../pages/NotFoundPage.vue'), meta: { title: 'Not Found' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title
    ? `${to.meta.title} | HireLicensedPlumbers.com`
    : 'HireLicensedPlumbers.com'
})

export default router
