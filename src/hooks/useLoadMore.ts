/** 加载更多函数 */
import { useEffect, useRef, useCallback } from 'react';
import useAsync from './useAsync';
/**
 * @param {Function} action
 * @param {Array} deps 依赖值
 */
interface IProps {
  deps: any[];
}

const useLoadMore = (props: IProps) => {
  const { deps } = props;

  useEffect(() => {}, [...deps]);

  // 发起请求
  //   const { loading, run } = useAsync();
};

export default useLoadMore;
