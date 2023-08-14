/** 异步请求封装 */
import { wait } from '@testing-library/user-event/dist/utils';
import { useEffect, useRef, useCallback, useState } from 'react';

interface AsyncResult<T> {
  loading: boolean;
  run: () => void;
  result: T | undefined;
}

interface SuccessHandler {
  <T>(res: any): T;
}

interface ErrorHandler {
  (err: any): void;
}

const noop = () => {};

const defaultOption = {
  mannual: false,
  onSuccess: noop as SuccessHandler,
  onError: noop as ErrorHandler
};

/**
 * @param {Function} action 返回一个Promise
 * @param {Object} customOption
 */

const useAsync = <T>(action: () => Promise<any>, customOption: object = {}): AsyncResult<T> => {
  const [loading, setLoading] = useState(false);

  const option = { ...defaultOption, ...customOption };

  const result = useRef<T>();

  // 执行请求
  const run = useCallback(() => {
    console.log(40, loading);
    if (loading) {
      return;
    }
    setLoading(true);
    const ret: Promise<any> = action();

    if (ret.then) {
      ret
        .then((res) => {
          result.current = option.onSuccess(res) || res;
        })
        .catch(() => {
          option.onError('失败');
        })
        .finally(() => {
          setTimeout(() => {
            console.log(22);
            setLoading(false);
          }, 3000);
        });
    }
  }, [action]);

  //   /**  */
  //   useEffect(() => {
  //     run();
  //   }, []);

  return { loading, run, result: result.current };
};

export default useAsync;
