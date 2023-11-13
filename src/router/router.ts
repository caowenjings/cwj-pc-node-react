import React, { lazy } from 'react';

export type RoutersType = {
  path: string;
  component: React.LazyExoticComponent<any>;
  routes: any[];
};

const router: RoutersType[] = [
  {
    path: '/',
    component: lazy(() => import('@/views/all/index')),
    routes: []
  },
  {
    path: '/tsTest',
    component: lazy(() => import('@/views/tsTest/index')),
    routes: []
  },
  {
    path: '/about',
    component: lazy(() => import('@/views/about/index')),
    routes: []
  },
  {
    path: '/user',
    component: lazy(() => import('../views/user')),
    routes: []
  },
  {
    path: '/friend',
    component: lazy(() => import('../views/about')),
    routes: []
  },
  {
    path: '/404',
    component: lazy(() => import('../views/not-found')),
    routes: []
  }
];

export default router;
