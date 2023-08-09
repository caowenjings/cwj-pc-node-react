import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: #e1e1e1;
  min-height: 100vh;
  padding-top: 82px;
`;

export const Fixed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #222;
  box-sizing: border-box;
  & {
    padding: 0 92px;
  }
  img {
    width: 60px;
    height: 60px;
  }
`;
