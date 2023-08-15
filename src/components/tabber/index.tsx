/** 导航栏 */
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Tabber } from '@/types/index';
import { ColorType } from '@/content/style';

import { TabbarWrapper, TabbarList } from './style';

export interface IProps {
  value: Tabber[];
  theme?: ColorType;
}

const TabberPage: React.FC<IProps> = (props) => {
  const { value, theme = 'WHITE' as ColorType } = props;
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handelJump = (route: string) => {
    console.log(999, route);
    navigate(route);
  };

  return (
    <TabbarWrapper>
      <TabbarList theme={theme}>
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
