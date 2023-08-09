import styled from 'styled-components';

import { COLOR, ColorType } from '@/content/style';

interface WrapperProps {
  theme: ColorType;
}

export const TabbarWrapper = styled.div``;

export const TabbarList = styled.div<WrapperProps>`
  display: flex;
  color: #999;
  font-size: 14px;

  div {
    padding: 0 10px;
    cursor: pointer;

    &.active {
      color: ${(props) => COLOR[props.theme as ColorType]};
      font-weight: bold;
    }
  }

  div:hover {
    color: ${(props) => COLOR[props.theme as ColorType]};
  }
`;
