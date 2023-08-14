/** 下拉加载更多列表 */
import React from 'react';
import Loading from '@/components/loading';

interface IProps {
  loading: boolean;
  completed: boolean;
  children: React.ReactNode;
  onLoad: () => void; // 请求列表函数
}

const ScrollListPage: React.FC<IProps> = (props: IProps) => {
  const { loading, completed, children, onLoad } = props;
  return (
    <div>
      {children}
      <div>{loading && <Loading text="玩命加载中" />}</div>
    </div>
  );
};

export default React.memo(ScrollListPage);
