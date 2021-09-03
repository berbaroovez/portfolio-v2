import styled from "styled-components";
import PageTitles from "../components/PageTitles";

export default function Goals() {
  return (
    <BlogDiv>
      <PageTitles
        title="Blogs"
        subtitle="The Anthony Fantano of coding, call that Blogthony Cotano"
      />
    </BlogDiv>
  );
}

const BlogDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 500px;
`;
