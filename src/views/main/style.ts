import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100vh;
  padding-top: 92px;
`;

export const Fixed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: '#222';
  img {
    width: 50px;
    height: 50px;
  }
`;
