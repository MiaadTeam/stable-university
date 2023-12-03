import styled from 'styled-components';
import { FC, ReactElement, ReactNode } from 'react';

interface IProps {
  children?: ReactElement | ReactNode;
}

export const Card: FC<IProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  align-content: flex-start;
  padding: 20px 10px;
  margin: 0.5rem;
  border-radius: 10px;
  backdrop-filter: blur(7px);
  background-color: rgba(65, 65, 65, 0.308);
  border: 1px solid rgba(255, 255, 255, 0.089);
  cursor: pointer;
  border: 1px solid darkgoldenrod;
`;
