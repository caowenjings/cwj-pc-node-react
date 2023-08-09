import { Tabber } from '../types/index';

export const navList: Tabber[] = [
  { name: '首页', route: '/' },
  { name: '新手入门', route: '/getstart' },
  { name: 'API', route: '/api' },
  { name: '关于', route: '/about' }
];

export const tabList: Tabber[] = [
  { name: '全部', route: '/' },
  { name: '精华', route: '/?tab=good' },
  { name: '分享', route: '/?tab=share' },
  { name: '问答', route: '/?tab=ask' },
  { name: '招聘', route: '/?tab=job' }
];
