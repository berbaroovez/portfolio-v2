import styled from "styled-components";
import { FC } from "react";

const FunWords: FC = ({ children }) => {
  return <FunWordZone>{children}</FunWordZone>;
};

const FunWordZone = styled.span`
  color: #3458f5;
`;

export { FunWords };
