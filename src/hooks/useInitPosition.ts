// 设置滚动条位置
import { useEffect } from 'react';

const useInitPosition = (...args: any) => {
  useEffect(() => {
    window.scrollTo.apply(null, args);
  }, []);
};

export default useInitPosition;
