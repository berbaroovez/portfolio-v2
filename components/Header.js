import styled from "styled-components";
import Link from "next/link";
export default function Header() {
  return (
    <HeaderDiv>
      <h1>Carter Olson</h1>
      <NavDiv>
        <NavBlocks>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/quotes">
            <a>Quotes</a>
          </Link>
        </NavBlocks>
        <NavBlocks>
          <Link href="/projects">
            <a>Portfolio</a>
          </Link>
          <Link href="/goals">
            <a>Goals</a>
          </Link>
        </NavBlocks>
        <NavBlocks>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </NavBlocks>
      </NavDiv>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  h1 {
    color: hsl(0, 0%, 30%);
  }
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
`;
const NavDiv = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  /* gap: 100px; */
  border-top: 1px solid var(--main-grey-color);
  border-bottom: 1px solid var(--main-grey-color);
`;
const NavBlocks = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  padding-left: 10px;
  justify-content: center;
  /* align-items: center; */
  /* justify-content: flex-start; */
  /* background-color: red; */
  font-size: 0.8rem;

  a {
    /* background-color: yellow; */
    color: var(--main-grey-font-color);
    text-decoration: none;
    :hover {
      text-decoration: underline;
      color: var(--main-grey-font-hover-color);
    }
  }

  &::after {
    right: 0;
    top: 6px;
    height: 80%;
    width: 1px;
    background-color: var(--main-grey-color);
    position: absolute;
    content: "";
  }
`;
