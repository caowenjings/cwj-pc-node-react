/** 关于页面 */
import React, { useState, memo } from 'react';

import { Btn, Box, Left, List, Right } from './style';

interface IApp {}

const App: React.FC<IApp> = (props) => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

  const handelOpen = (type: number) => {
    let getEle = document.getElementById('list' + type)!;
    getEle.scrollIntoView();
  };

  return (
    <Box>
      <Left>
        {data.map((item) => {
          return (
            <Btn
              onClick={() => {
                handelOpen(item);
              }}
            >
              {item}
            </Btn>
          );
        })}
      </Left>
      <Right>
        {data.map((item) => {
          return <List id={'list' + item}>内容：{item}</List>;
        })}
      </Right>
    </Box>
  );
};

export default memo(App);
