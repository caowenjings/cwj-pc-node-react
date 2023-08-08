/** 关于页面 */
import React, { useState, memo } from 'react';

interface IApp {}

const App: React.FC<IApp> = (props) => {
  const [data, setData] = useState(0);

  return <div>123{data}</div>;
};

export default memo(App);
