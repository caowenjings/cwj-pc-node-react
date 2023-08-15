/** 首页页面 */
import React, { memo, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { tabList } from '@/content';
import sdk from '@/service/node';
import useLoadMore from '@/hooks/useLoadMore';

import ScrollList from '@/components/scroll-list';
import Tabber from '@/components/tabber';
import Card from './components/card';
import { TabWrapper, ListWrapper, AllWrapper } from './style';

const PAGE_SIZE = 20;

const AllPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get('tab') || '';
  console.log(999, tag);

  /** 获取列表请求 */
  const getTopicsByTab = useCallback(
    (info: any) => {
      return sdk.getTopicsByTab(tag, info.page || 1, PAGE_SIZE);
    },
    [tag]
  );

  const { loading, loadMore, completed, list } = useLoadMore(
    getTopicsByTab,
    {
      initPageSize: 20,
      formatResult: ({ response: { data = [] } = {} }) => {
        return {
          list: data
        };
      },
      isNoMore: ({ data }) => {
        return data && data.length > PAGE_SIZE;
      },
      tag
    },
    [tag]
  );

  useEffect(() => {}, []);
  /** 获取更多 */

  return (
    <AllWrapper>
      <TabWrapper>
        <Tabber value={tabList} theme="GREEN" />
      </TabWrapper>
      <ListWrapper>
        <ScrollList loading={loading} completed={completed} onLoad={loadMore}>
          {list.map((item) => {
            return <Card data={item} />;
          })}
        </ScrollList>
      </ListWrapper>
    </AllWrapper>
  );
};

export default memo(AllPage);
