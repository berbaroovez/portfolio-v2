import { FunctionComponent } from "react";
import styled from "styled-components";
import SideQuote from "./SideQuote";
const Layout: FunctionComponent = ({ children }) => {
  return (
    <LayoutDiv>
      <SideQuote />
      {children}
    </LayoutDiv>
  );
};

const LayoutDiv = styled.div`
  position: relative;
  /* background-color: red; */
  width: 100%;
  /* height: 100%; */
  /* height: 100vh; */
  /* padding: 0 20px; */
`;
export { Layout };
