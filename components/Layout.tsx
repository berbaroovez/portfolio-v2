import { FunctionComponent } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import SideQuote from "./SideQuote";
const Layout: FunctionComponent = ({ children }) => {
  return (
    <LayoutDiv>
      <SideQuote />
      <Main>{children}</Main>
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

const Main = styled.main`
  margin-bottom: 100px;
  min-height: 80vh;
`;
