import React, { useState, memo } from 'react';
import { Tabber } from '../../types/index';

const Tabber: React.FC<Tabber[]> = (props) => {
  const [data, setData] = useState(0);

  return <div>123{data}</div>;
};

export default memo(Tabber);
