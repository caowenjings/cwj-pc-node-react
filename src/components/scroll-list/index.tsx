/** 下拉加载更多列表
 * 思路：只要滑到底部，就加载外部数据，之后延长列表即可
 * 操作：创建IntersectionObserver监听最后一个元素，然后滑动到底部后加载数据。
 */
import React, { useCallback, useRef, useEffect } from 'react';
import 'intersection-observer'; // polyfill 元限滚动

import Loading from '@/components/loading';

// 通过IntersectionObserver监听dom节点是否在视口中，可以避免dom元素过多从而计算量很大，导致性能问题，也可以简化代码量

interface IProps {
  loading: boolean;
  completed: boolean;
  children: React.ReactNode;
  onLoad: () => void; // 请求列表函数
}

const ScrollListPage: React.FC<IProps> = (props: IProps) => {
  const { loading, completed, children, onLoad } = props;
  const bottomEl: any = useRef<HTMLDivElement>();

  // 触发命中观察的回调
  const hanlder = useCallback(
    (entries: any) => {
      if (completed) return;
      // 滑动到底部
      if (entries[0].intersectionRatio > 0) {
        onLoad();
      }
    },
    [completed, onLoad]
  );

  const observer: React.RefObject<IntersectionObserver> = useRef(new IntersectionObserver(hanlder)); //监听保存

  useEffect(() => {
    // 开始监听
    observer.current && observer.current.observe(bottomEl.current);

    return () => {
      // 关闭监听
      observer.current && observer.current.unobserve(bottomEl.current);
    };
  }, []);

  return (
    <div>
      {children}
      <div ref={bottomEl}>
        {loading && !completed && <Loading text="玩命加载中" />}
        {!loading && completed && <Loading text="加载完成" />}
      </div>
    </div>
  );
};

export default React.memo(ScrollListPage);
