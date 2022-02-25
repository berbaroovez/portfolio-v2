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
  console.log("props", props);
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
        subtitle="The Anthony Fantano of coding, call that Blogthony Codetano"
      />
      {props.posts.map((post) => {
        console.log("post", post);
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
    console.log("data in blog page", data);

    return {
      ...data,
    };
  });

  //filter out all the posts that arent published
  const postList = await Promise.all(posts);
  const publishedPosts = postList.filter((post) => post.published === true);
  return {
    props: {
      posts: publishedPosts,
    },
  };
}
