/** 主页面 */
import React, { useState, memo } from 'react';

import Router from '../../router/index';

import { MainWrapper, Fixed } from './style';

const WJMain: React.FC = (props) => {
  const [data, setData] = useState(0);

  return (
    <MainWrapper>
      <Fixed>
        <img src={require('../../assets/svg/logo.svg')} alt="" />
      </Fixed>
      <Router />
    </MainWrapper>
  );
};

export default memo(WJMain);
