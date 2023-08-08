/** 首页页面 */
import React, { useState, memo } from 'react';

import ScrollList from '@/components/scroll-list';

const AllPage: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, stLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const getLodeMore = () => {};

  return (
    <div>
      <ScrollList loading={loading} completed={completed} onLoad={getLodeMore}>
        {data.map((item) => {
          return <div>123</div>;
        })}
      </ScrollList>
    </div>
  );
};

export default memo(AllPage);
