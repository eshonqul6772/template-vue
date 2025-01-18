import { createRouter, createWebHistory } from 'vue-router';
import { TokenService } from '@/services/storage.service.ts';

const router = createRouter({
  linkActiveClass: 'active link',
  linkExactActiveClass: 'exact-active-link',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '/:catchAll(.*)',
          name: '404',
          component: () => import('@/views/pages/error/Error.vue'),
        },
        {
          name: 'login',
          path: '/login',
          component: () => import('@/views/pages/auth/Login.vue'),
          meta: {
            public: true,
            onlyWhenLoggedOut: true,
          },
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/pages/auth/Login.vue'),
    },
    {
      path: '/find-job',
      name: 'findJob',
      component: () => import('@/components/About/About.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/pages/error/Error.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn =
    import.meta.env.VITE_ENCRYPT === 'on'
      ? !!TokenService.getToken() && !!TokenService.getEmicrypterData()
      : !!TokenService.getToken();

  const isPublic = to.matched.some((record) => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    (record) => record.meta.onlyWhenLoggedOut
  );

  // if (!isPublic && !loggedIn && to.path !== '/') {
  //   return next({
  //     path: '/',
  //     query: { redirect: to.fullPath },
  //   });
  // }

  if (loggedIn && onlyWhenLoggedOut) {
    return next('/');
  }
  next();
});

export default router;
