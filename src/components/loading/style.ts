import styled, { keyframes } from 'styled-components';

interface WrapperProps {
  size: number;
}

const rotate = keyframes`
  from { transform: rotate(0deg)}
  to { transform: rotate(360deg)}
`;

export const LoadingWrapper = styled.div<WrapperProps>`
  margin: 10px auto;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.3);
  animation: ${rotate} 1s linear infinite;
`;

export const TextWrapper = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;
