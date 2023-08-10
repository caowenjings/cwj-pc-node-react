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
  const result = useRef<T>();
  const option = Object.assign({}, defaultOption, customOption);

  // 执行请求
  const run = useCallback(() => {
    setLoading(true);
    const ret: Promise<any> = action();
    if (ret.then) {
      ret
        .then((res) => {
          result.current = option.onSuccess(res) || res;
        })
        .catch(() => {
          option.onError;
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [action]);

  //   /**  */
  //   useEffect(() => {
  //     run();
  //   }, []);

  return { loading, run, result: result.current };
};

export default useAsync;
