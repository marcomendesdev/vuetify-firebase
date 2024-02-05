import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Swal from 'sweetalert2'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '/',
        redirect: '/dashboard',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/DashboardView.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/UsersView.vue'),
      },
      {
        path: '/my-account',
        name: 'MyAccount',
        component: () => import('@/views/MyAccountView.vue'),
      },
      {
        path: '/messages',
        name: 'Messages',
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: '/inbox',
            name: 'Inbox',
            component: () => import('@/views/messages-views/InboxView.vue'),
          },
          {
            path: '/send',
            name: 'Send',
            component: () => import('@/views/messages-views/SendView.vue'),
          },
          {
            path: '/spam',
            name: 'Spam',
            component: () => import('@/views/messages-views/SpamView.vue'),
          },
          {
            path: '/trash',
            name: 'Trash',
            component: () => import('@/views/messages-views/TrashView.vue'),
          }
        ]
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth-views/LoginView.vue'),
      },
      {
        path: '/signup',
        name: 'Signup',
        component: () => import('@/views/auth-views/SignupView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('@/views/PageNotFoundView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(getAuth(), user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}

router.beforeEach(async (to, from, next) => {
 if (to.matched.some(record => record.meta.requiresAuth)) {
   if (await getCurrentUser()) {
     next();
   } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You need to login to see this page!",
    });
     next('/login');
   }
 } else {
   next();
 }
})

export default router
