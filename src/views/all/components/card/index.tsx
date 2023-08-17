/** 首页页面
 * cardWrapper
 * cardHead -》子元素 image,info,time
 * cardBody -》子元素（tag）
 */
import React, { useState, memo, useCallback, useEffect } from 'react';
import { format } from 'timeago.js';

import { Topic as TopicType } from '@/types/index';
import Image from '@/components/image';
import Tag from '@/components/tag';

import { CardWrapper, CardHead, CardBody, Info, Flex } from './style';

interface Iprops {
  data: TopicType;
  onClick?: (e: React.MouseEvent) => void;
}

const WJCard: React.FC<Iprops> = (props) => {
  const { data, onClick } = props;

  /** 获取类型 */
  const genTagType = () => {
    if (data.top) return 'top';
    if (data.good) return 'good';

    return data.tab;
  };

  return (
    <CardWrapper onClick={onClick} key={data.id}>
      <CardHead>
        <Image width={36} height={36} src={data.author.avatar_url} />
        <Info>
          <p title="回复数">{data.reply_count}/</p>
          <p title="查看数">{data.visit_count}</p>
        </Info>
      </CardHead>
      <CardBody>
        <Flex>
          <Tag type={genTagType()} />
          <p>{data.title}</p>
        </Flex>
        <Flex>
          <Image width={30} height={30} src={data.author.avatar_url} />
          <p>{format(data.last_reply_at, 'zh_CN')}</p>
        </Flex>
      </CardBody>
    </CardWrapper>
  );
};

export default memo(WJCard);
