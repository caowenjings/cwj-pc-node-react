/** 加载中页面 */
import React from 'react';

import { LoadingWrapper, TextWrapper } from './style';

interface IProps {
  size?: number;
  text: string;
}

const LoadingPage: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <LoadingWrapper size={props.size || 30} />
      {props.text && <TextWrapper>{props.text}</TextWrapper>}
    </>
  );
};

export default React.memo(LoadingPage);
