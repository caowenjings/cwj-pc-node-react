import styled from 'styled-components';

export const TabbarWrapper = styled.div``;

export const TabbarList = styled.div`
  display: flex;
  color: #999;
  font-size: 14px;

  div {
    height: 59px;
    line-height: 59px;
    padding: 0 20px;
    cursor: pointer;

    &.active {
      color: #fff;
      font-weight: bold;
    }
  }

  div:hover {
    color: #fff;
  }
`;
