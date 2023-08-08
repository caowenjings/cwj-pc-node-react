/** 首页页面 */
import React, { useState, memo } from 'react';

interface Iprops {}

const AllPage: React.FC<Iprops> = (props) => {
  const [data, setData] = useState(0);

  return <div>156565623{data}</div>;
};

export default memo(AllPage);
