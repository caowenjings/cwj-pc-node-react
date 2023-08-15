/** 异步请求封装 */
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
  mannual: false, //自动触发请求：false 自动触发第一次请求，true不触发
  onSuccess: noop as SuccessHandler,
  onError: noop as ErrorHandler
};

/**
 * @param {Function} action 返回一个Promise
 * @param {Object} customOption 最后返回的参数
 */

const useAsync = <T>(action: () => Promise<any>, customOption: object = {}): AsyncResult<T> => {
  const [loading, setLoading] = useState(false);
  const option = { ...defaultOption, ...customOption };
  const result = useRef<T>();

  // 执行请求
  const run = useCallback(() => {
    if (loading) return;

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
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [action, loading]);

  useEffect(() => {
    !option.mannual && run();
  }, []);

  return { loading, run, result: result.current };
};

export default useAsync;
