/** 下拉加载更多列表 */
import React from 'react';

interface IProps {
  loading: boolean;
  completed: boolean;
  children: React.ReactNode;
  onLoad: () => void; // 请求列表函数
}

const ScrollListPage: React.FC<IProps> = (props: IProps) => {
  const { loading, completed, children, onLoad } = props;
  return <>{children}</>;
};

export default React.memo(ScrollListPage);
