import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styled from "styled-components";
import { serialize } from "next-mdx-remote/serialize";
import { GetStaticPaths, GetStaticProps } from "next";
import CodeBlock from "./../../components/BlogStuff/CodeBlock";
import { NextSeo } from "next-seo";

interface BlogProps {
  by: string;
  title: string;
  slug: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Blog = (props: BlogProps) => {
  console.log(props);
  const { source } = props;

  // console
  return (
    <>
      <NextSeo
        title={`${props.title} – Carter Olson`}
        canonical={`https://cartols/blog/${props.slug}`}
        openGraph={{
          url: "https://cartols/quotes",
          title: "quotes – Carter Olson",
        }}
      />
      <BlogZone>
        <h1>{props.title}</h1>
        <MDXRemote {...source} components={{ CodeBlock }} />
      </BlogZone>
    </>
  );
};

//we get the context and now we can use the slug to get the file
export const getStaticProps: GetStaticProps = async (context) => {
  //Params contains the slug we use that slug to find the correct file to grab the mdx data from
  //we do this because at the time of building i couldnt figure out how to also pass in the filename from getStaticPaths

  const { params } = context;
  const directory = path.join(process.cwd(), "blogs");
  let filenames = await fs.readdirSync(directory);
  filenames = filenames.filter((path) => /\.mdx$/.test(path));

  let blogData: any = null;

  for (var i = 0; i < filenames.length; i++) {
    const source = await fs.readFileSync(path.join(directory, filenames[i]));
    const { data, content } = matter(source);

    //once we find the right file break
    if (data.slug === params?.slug) {
      const source = await serialize(content);
      blogData = { ...data, source };
      break;
    }
  }

  return {
    props: {
      ...blogData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const directory = path.join(process.cwd(), "blogs");

  //filter out all other files that arnt mdx
  let filenames = await fs.readdirSync(directory);
  filenames = filenames.filter((path) => /\.mdx$/.test(path));

  const posts = filenames.map(async (filename) => {
    const source = await fs.readFileSync(path.join(directory, filename));
    const { data } = matter(source);
    return {
      data,
    };
  });

  const blogInfo = await Promise.all(posts);

  const paths = blogInfo.map((post) => ({ params: { ...post.data } }));
  // console.log(paths);

  return {
    paths: blogInfo.map((post) => ({ params: { ...post.data } })),
    fallback: false,
  };
};

export default Blog;

const BlogZone = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
