import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { message } from 'antd';

import { SuccessFormat } from '@/types/index';

/** 成功时的统一处理 */
const handelSuccess = (res: AxiosResponse, resolve: (res: any) => void) => {
  const response: SuccessFormat = res.data;
  if (response.hasOwnProperty('success')) {
    if (response.success) {
      resolve(response);
    } else {
      handleError(response);
    }
  } else {
    handleError(response);
  }
};

/** 失败时的统一处理 */
const handleError = (res: any) => {
  let msg = res.message || res.msg || '';
  message.error(`请求失败，请重新刷新页面尝试：${msg}`);
};

class SDK {
  $http: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.$http = axios.create(config || {});
  }

  get(url: string, params?: object) {
    return new Promise((resolve, reject) => {
      this.$http
        .get(url, { params })
        .then((res) => handelSuccess(res, resolve))
        .catch(handleError);
    });
  }

  post(url: string, data?: object) {
    return new Promise((resolve, reject) => {
      this.$http
        .get(url, { data })
        .then((res) => handelSuccess(res, resolve))
        .catch(handleError);
    });
  }
}

export default SDK;
