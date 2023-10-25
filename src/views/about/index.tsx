/** 关于页面 */
import React, { useState, memo, useEffect } from 'react';
import { message } from 'antd';

interface IApp {}

const App: React.FC<IApp> = (props) => {
  const [data, setData] = useState(0);

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilitychange);

    return () => {
      console.log(44);
      document.removeEventListener('visibilitychange', () => {});
    };
  }, []);

  const handleVisibilitychange = () => {
    console.log(232323, document.visibilityState);
    if (document.visibilityState == 'hidden') {
      document.title = '禁止切换窗口';
    } else if (document.visibilityState == 'visible') {
      document.title = 'tab1';
    }
  };

  return <div>123{data}</div>;
};

export default memo(App);
