import styled from 'styled-components';

export const MainWrapper = styled.div`
  position: relative;
  background-color: #e1e1e1;
  padding-top: 82px;
  box-sizing: border-box;
  height: 100vh;
  overflow: hidden;
  border: 1px solid #000;
`;

export const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
