import styled from 'styled-components';

import { COLOR_THEME } from '@/content/style';

export const UserInfo = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
// info页面
export const InfoPanel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const InfoContent = styled.div`
  margin: 0 10px;

  h3 {
    line-height: 20px;
    font-size: 16px;
  }

  li {
    line-height: 20px;
    color: #aaa;
  }
`;

// list页面
export const ListPanel = styled.div`
  margin-bottom: 10px;

  h3 {
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ddd;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  line-height: 20px;

  a {
    display: inline-block;
    flex: 1;
    color: ${COLOR_THEME};
    text-decoration: none;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .create-at {
    display: inline-block;
    color: #aaa;
  }
`;
