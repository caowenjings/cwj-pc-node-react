import Service from './index';

class Node extends Service {
  constructor() {
    super({
      // baseURL: 'https://cnodejs.org/api/v1',
      baseURL: 'https://cnodejs.org/api/v1',
      timeout: 8000
    });
  }

  /**
   * 获取分类列表
   * @param {String} tab 类型
   * @param {Number} page 页码
   * @param {Number} limit 每页数量
   */
  getTopicsByTab(tab: string, page: number = 1, limit: number = 20) {
    return this.get('/topics', {
      page,
      limit,
      tab
    });
  }

  /**
   * 获取话题的文章详情
   * @param {String} topicId
   */
  getTopicDetail(topicId: string | number) {
    return this.get(`/topic/${topicId}`);
  }

  /**
   * 获取用户详情页数据
   * @param {String} username
   */
  getUserDetail(username: string) {
    return this.get(`/user/hyj1991`);
  }

  /**
   * 获取用户收藏的文章
   * @param {String}} username
   */
  getUserCollection(username: string) {
    username = 'hyj1991';
    return this.get(`/topic_collect/${username}`);
  }

  /** 文件下载
   *  虚拟路径
   */
  getDown(url: string, para: string, data: any) {
    return this.get(`${url}/topic_collect`);
  }
}

const node = new Node();

export default node;
