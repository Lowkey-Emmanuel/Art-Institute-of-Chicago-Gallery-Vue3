/*Routes setup */
import { createRouter, createWebHashHistory } from 'vue-router'

import AcceuilView from '@/views/AcceuilView.vue'
import RechercheView from '@/views/RechercheView.vue'
import AProposView from '@/views/AProposView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ErrorPageView from '@/views/ErrorPageView.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: AcceuilView },
    { path: '/recherche', component: RechercheView },
    { path: '/apropos', component: AProposView },
    { path: '/login', component: LoginView },
    { path: '/signup', component: SignupView },
    { path: '/404error', component: ErrorPageView }
  ],
  linkActiveClass: 'active-link'
})
