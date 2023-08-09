/** -------------------- 请求服务---------------------- */
export interface SuccessFormat {
  success?: boolean;
  data?: any;
}

/** -------------------- 顶部导航栏 ------------------------- */
export interface Tabber {
  name: string;
  route: string;
}
