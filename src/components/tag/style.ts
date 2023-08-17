import styled from 'styled-components';

interface ITag {
  color: string;
}

export const TagWrapper = styled.div<ITag>`
  display: inline-block;
  padding: 7px 10px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) => props.color};
  border-radius: 4px;
`;
