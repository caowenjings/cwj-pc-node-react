/** 导航栏 */
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Tabber } from '@/types/index';

import { TabbarWrapper, TabbarList } from './style';

interface IProps {
  value: Tabber[];
}

const TabberPage: React.FC<IProps> = (props) => {
  const { value } = props;
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handelJump = (route: string) => {
    navigate(route);
  };

  return (
    <TabbarWrapper>
      <TabbarList>
        {value.map((item: Tabber) => (
          <div
            className={name === item.name ? 'active' : ''}
            key={item.name}
            onClick={() => {
              setName(item.name);
              handelJump(item.route);
            }}
          >
            {item.name || ''}
          </div>
        ))}
      </TabbarList>
    </TabbarWrapper>
  );
};

export default memo(TabberPage);
