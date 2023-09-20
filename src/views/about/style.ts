import styled from 'styled-components';

export const Box = styled.div`
  height: 100%;
  display: flex;
`;

export const Left = styled.div`
  width: 200px;
  display: flex;
  flex-wrap: wrap;
`;

export const Right = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: scroll;
  margin-bottom: 40px;
  padding-bottom: 40px;
  box-sizing: border-box;
`;

export const Btn = styled.div`
  border: 1px solid #000;
  width: 40px;
  height: 40px;
`;

export const List = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 80px;
`;
