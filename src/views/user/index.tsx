/** 用户界面 */
import React, { useState, memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ArticleLink } from '@/types';
import sdk from '@/service/node';

import useInitPosition from '@/hooks/useInitPosition';
import useAsync from '@/hooks/useAsync';
import Info from './compontent/info';

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
  // const [data, setData] = useState(0);
  const { name = '' } = useParams();

  useInitPosition(0, 0);

  const { loading, run } = useAsync(() => sdk.getUserDetail(name), {
    onSuccess: (res: any) => {
      console.log(99, res);
    }
  });

  useEffect(() => {
    run();
  }, []);

  return <div>{/* <Info value={} />123 */}123</div>;
};

export default memo(WJUser);
