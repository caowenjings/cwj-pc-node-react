import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
`;

export const CardHead = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #555;

  p {
    margin: 6px 0;
  }
`;

export const CardBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Time = styled.div`
  padding-top: 30px;
`;
