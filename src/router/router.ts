import React, { lazy } from 'react';

export type RoutersType = { 
  path: string; 
  component: React.LazyExoticComponent<any>; 
  routes: any[] 
};


const router: RoutersType[] = [
  {
    path: '/',
    component: lazy(() => import('../views/about')),
    routes: []
  },
  {
    path: '/discover',
   component: lazy(() => import('../views/about')),
    routes: []
  },
  {
    path: '/my',
    component: lazy(() => import('../views/about')),
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