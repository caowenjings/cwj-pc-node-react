/** 首页页面 */
import React, { useState, memo } from 'react';
import { useParams } from 'react-router-dom';

import { tabList } from '@/content';

import ScrollList from '@/components/scroll-list';
import Tabber from '@/components/tabber';
import { TabWrapper, ListWrapper } from './style';

const AllPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, stLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const { tag = '' } = useParams();

  const getLodeMore = () => {};

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
