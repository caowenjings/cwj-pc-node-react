/** 首页页面 */
import React, { memo, useCallback, useRef, useMemo, useState, useEffect } from 'react';

import { tabList } from '@/content';
import sdk from '@/service/node';
import useLoadMore from '@/hooks/useLoadMore';
import { isEmpty } from '@/utils/index';

import ScrollList from '@/components/scroll-list';
import Tabber from '@/components/tabber';
import Card from './components/card';
import { TabWrapper, ListWrapper, AllWrapper } from './style';
import createSkeleton from './components/Skeleton/index';

const PAGE_SIZE = 20;
const Skeleton = createSkeleton(5);

const AllPage: React.FC = () => {
  const [tag, setTag] = useState('');
  const tag1 = useRef('');

  const handleChange = (router: any) => {
    const data = router.split('/?tab=');
    const result = data[data.length - 1] === '/' ? '' : data[data.length - 1];
    setTag(result);
    tag1.current = result;
  };

  /** 获取列表请求 */
  const getTopicsByTab = useCallback(
    (info: any) => {
      return sdk.getTopicsByTab(tag1.current, info.page || 1, PAGE_SIZE);
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
      }
    },
    [tag]
  );

  /** 是否有数据 */
  const hasList = useMemo(() => !isEmpty(list), [list]);

  return (
    <AllWrapper>
      <TabWrapper>
        <Tabber value={tabList} theme="GREEN" onClick={handleChange} />
      </TabWrapper>
      <ListWrapper>
        {hasList && (
          <ScrollList loading={loading} completed={completed} onLoad={loadMore}>
            {list.map((item) => {
              return <Card data={item} />;
            })}
          </ScrollList>
        )}
        {/* 骨架图 */}
        {!hasList && Skeleton}
      </ListWrapper>
    </AllWrapper>
  );
};

export default memo(AllPage);
