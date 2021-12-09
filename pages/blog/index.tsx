import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import styled from "styled-components";
import PageTitles from "../../components/PageTitles";
import { NextSeo } from "next-seo";
import Link from "next/link";
interface BlogHomepageProps {
  posts: BlogInfo[];
}

interface BlogInfo {
  title: string;
  by: string;
  slug: string;
  date: string;
}
export default function BlogHomepage(props: BlogHomepageProps) {
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
      {props.posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.date}</p>
          </div>
        );
      })}
    </BlogDiv>
  );
}

const BlogDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 500px;
`;

export async function getStaticProps() {
  const directory = path.join(process.cwd(), "blogs");

  //filter out all other files that arnt mdx
  let filenames = await fs.readdirSync(directory);
  filenames = filenames.filter((path) => /\.mdx$/.test(path));

  //read the data from the files
  const posts = filenames.map(async (filename) => {
    const source = await fs.readFileSync(path.join(directory, filename));
    const { data } = matter(source);

    return {
      ...data,
    };
  });

  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
}
