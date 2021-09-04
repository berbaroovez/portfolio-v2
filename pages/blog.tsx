import styled from "styled-components";
import PageTitles from "../components/PageTitles";
import { NextSeo } from "next-seo";
export default function Goals() {
  return (
    <BlogDiv>
      <NextSeo
        title="blog – Carter Olson"
        canonical="https://cartols/blog"
        openGraph={{
          url: "https://cartols/blog",
          title: "blog – Carter Olson",
        }}
      />
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
