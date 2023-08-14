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

/** ------------------ 文章具体内容 ------------------------------------ */
export interface Topic {
  id: string;
  tab: string;
  title: boolean;
  author_id: string;
  author: string;
  content?: string;
  good?: boolean;
  top?: boolean;
  visit_count?: number;
  reply_count?: number;
  last_reply_at: string;
  create_at: string;
}
