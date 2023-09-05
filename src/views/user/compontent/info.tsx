/** 用户界面-info */
import React, { memo } from 'react';
import { format } from 'timeago.js';

import createSkeleton from './infoSkeleton';
import Image from '@/components/image';
import { InfoPanel, InfoContent } from '../style';

interface IInfoProps {
  loginname?: string;
  avatar_url?: string;
  score?: number;
  create_at: string;
}

const WJInfo: React.FC<{ value: IInfoProps | undefined }> = (props) => {
  const info = props.value || ({} as IInfoProps);
  const Skeleton = createSkeleton(1);
  return (
    <>
      {info ? (
        <InfoPanel>
          <Image src={info?.avatar_url || ''} width={60} height={60} radius={4} />
          <InfoContent>
            <h3>{info?.loginname}</h3>
            <ul>
              <li>积分：{info.score || 0}</li>
              <li>注册于&nbsp;{info.create_at && format(info.create_at, 'zh_CN')}</li>
            </ul>
          </InfoContent>
        </InfoPanel>
      ) : (
        Skeleton
      )}
    </>
  );
};

export default memo(WJInfo);
