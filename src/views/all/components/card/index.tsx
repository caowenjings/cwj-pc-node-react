/** 首页页面
 * cardWrapper
 * cardHead -》子元素 image,info,time
 * cardBody -》子元素（tag）
 */
import React, { useState, memo, useCallback, useEffect } from 'react';
import { format } from 'timeago.js';

import { Topic as TopicType } from '@/types/index';
import Image from '@/components/image';

import { CardWrapper, CardHead, CardBody, Info, Time } from './style';

interface Iprops {
  data: TopicType;
  onClick?: (e: React.MouseEvent) => void;
}

const WJCard: React.FC<Iprops> = (props) => {
  const { data, onClick } = props;
  return (
    <CardWrapper onClick={onClick} key={data.id}>
      <CardHead>
        <Image width={40} height={40} src={data.author.avatar_url} />
        <Info>
          <p title="查看数">{data.visit_count}</p>/<p title="回复数">{data.reply_count}</p>
        </Info>
      </CardHead>
      <CardBody>
        {data.title} <Time>{format(data.last_reply_at, 'zh_CN')}</Time>
      </CardBody>
    </CardWrapper>
  );
};

export default memo(WJCard);
