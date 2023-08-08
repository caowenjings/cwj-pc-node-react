import React, { useState, memo } from 'react';
import { Tabber } from '../../types/index';

interface IProps {
  value: Tabber[];
}
const Tabber: React.FC<IProps> = (props) => {
  const [data, setData] = useState(0);

  return <div>123{data}</div>;
};

export default memo(Tabber);
