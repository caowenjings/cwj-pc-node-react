/** 首页页面 */
import React, { useState, memo, useCallback, useEffect } from 'react';

import { CardWrapper } from './style';

import { Topic as TopicType } from '@/types/index';

interface Iprops {
  data: TopicType;
  onClick?: (e: React.MouseEvent) => void;
}

const WJCard: React.FC<Iprops> = (props) => {
  const { data, onClick } = props;
  return (
    <CardWrapper onClick={onClick} key={data.id}>
      <p>{data.title}</p>
    </CardWrapper>
  );
};

export default memo(WJCard);
