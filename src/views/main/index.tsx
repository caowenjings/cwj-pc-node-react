/** 主页面 */
import React, { useState, memo } from 'react';

import Router from '../../router/index';
import { navList } from '@/content/index';

import Tabber from '@/components/tabber';
import { MainWrapper, Fixed } from './style';

import logoImg from '../../assets/svg/logo.svg';

const WJMain: React.FC = () => {
  return (
    <MainWrapper>
      <Fixed>
        <img src={logoImg} alt="" />
        <Tabber value={navList} />
      </Fixed>
      <Router />
    </MainWrapper>
  );
};

export default memo(WJMain);
