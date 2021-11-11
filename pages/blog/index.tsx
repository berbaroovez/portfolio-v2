import path from "path";
import matter from "gray-matter";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
const BlogHomepage = ({ posts }: any) => {
  // console.log(posts);
  return (
    <div>
      <h1>Blog Homepage</h1>
    </div>
  );
};

export async function getStaticProps() {
  const directory = path.join(process.cwd(), "blogs");

  //filter out all other files that arnt mdx
  let filenames = await fs.readdirSync(directory);
  filenames = filenames.filter((path) => /\.mdx$/.test(path));

  //read the data from the files
  const posts = filenames.map(async (filename) => {
    const source = await fs.readFileSync(path.join(directory, filename));
    const { content, data } = matter(source);
    // const filePath = path.join(directory, filename);
    // const fileContents = await fs.readFile(filePath);
    // const mdxSource = await serialize(fileContents.toString());
    // const { data, content } = matter(mdxSource);

    return {
      filename,
      content,
      data,
    };
  });

  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
}

export default BlogHomepage;
