/** 首页页面 */
import React, { useState, memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { tabList } from '@/content';
import sdk from '@/service/node';
import useAsync from '@/hook/useAsync';

import ScrollList from '@/components/scroll-list';
import Tabber from '@/components/tabber';
import { TabWrapper, ListWrapper } from './style';

const PAGE_SIZE = 20;

const AllPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [completed, setCompleted] = useState(false);

  const { tag = '' } = useParams();

  const getLodeMore = () => {};

  /** 获取列表请求 */
  const getTopicsByTab = useCallback(() => {
    return sdk.getTopicsByTab(tag, 1, PAGE_SIZE);
  }, [tag]);

  const { loading, run } = useAsync(getTopicsByTab, {
    mannual: true,
    onSuccess: (res: any) => {
      console.log(99, res);
    },
    onError: () => {}
  });

  useEffect(() => {
    run();
  }, []);
  /** 获取更多 */

  return (
    <div>
      <TabWrapper>
        <Tabber value={tabList} theme="GREEN" />
      </TabWrapper>

      <ListWrapper>
        <ScrollList loading={loading} completed={completed} onLoad={getLodeMore}>
          {data.map((item) => {
            return <div>123</div>;
          })}
        </ScrollList>
      </ListWrapper>
    </div>
  );
};

export default memo(AllPage);
