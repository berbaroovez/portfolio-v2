import styled, { keyframes } from "styled-components";

export default function PopOutAtTheParty() {
  return <PopOutDiv> </PopOutDiv>;
}

const rotate = keyframes`
  from {
    transform: translateX(-100px);
  }

  to {
    transform: translateX(0);
  }
`;

const PopOutDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;

  /* animation: ${rotate} 2s linear infinite reverse; ; */
`;
