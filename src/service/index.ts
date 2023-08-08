import axios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';

class SDK {
  $http: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.$http = axios.create(config || {});
  }

  get(url: string, params?: object) {
    return new Promise((resolve, reject) => {
      this.$http
        .get(url, { params })
        .then((res) => {})
        .catch((res) => {});
    });
  }

  post(url: string, data?: object) {
    return new Promise((resolve, reject) => {
      this.$http
        .get(url, { data })
        .then((res) => {})
        .catch((res) => {});
    });
  }
}

export default SDK;
