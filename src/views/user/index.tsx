/** 用户界面 */
import React, { memo, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleLink } from '@/types';
import sdk from '@/service/node';

import useInitPosition from '@/hooks/useInitPosition';
import useAsync from '@/hooks/useAsync';
import Info from './compontent/info';
import List from './compontent/list';
import { UserInfo } from './style';

interface UserDetail {
  avatar_url: string;
  create_at: string;
  githubUsername: string;
  loginname: string;
  recent_replies: ArticleLink[];
  recent_topics: ArticleLink[];
  score: number;
}

const WJUser: React.FC = () => {
  const { name = '' } = useParams();

  useInitPosition(0, 0);

  /** useAsync<{ data: UserDetail }> 使用了范型T  */
  const { result: infoResult } = useAsync<{ data: UserDetail }>(() => sdk.getUserDetail(name));
  let { result: collectionResult } = useAsync<{ data: ArticleLink[] }>(() => sdk.getUserCollection(name));

  const info = useMemo(() => {
    return infoResult ? infoResult.data : ({} as UserDetail);
  }, [infoResult]);

  const collection = useMemo(() => {
    return collectionResult ? collectionResult.data : ([] as ArticleLink[]);
  }, [collectionResult]);

  return (
    <UserInfo>
      <Info value={info} />
      <List title="最近发布话题" value={info?.recent_topics} />
      <List title="最近回复" value={info?.recent_replies} />
      <List title="收藏话题" value={collection} />
    </UserInfo>
  );
};

export default memo(WJUser);
