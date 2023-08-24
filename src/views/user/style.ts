import React from 'react';
import styled from 'styled-components';

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
