export default {
  mdx_blog: `
export const getStaticPaths: GetStaticPaths = async () => {
  const directory = path.join(process.cwd(), "blogs");

  //filter out all other files that arnt mdx
  let filenames = await fs.readdirSync(directory);
  filenames = filenames.filter((path) => /\.mdx$/.test(path));

  //go through the files and get the greymatter data and return it
  const posts = filenames.map(async (filename) => {
    const source = await fs.readFileSync(path.join(directory, filename));
    const { data } = matter(source);
    return {
      data,
    };
  });

  //We use promise.all to wait for all the promises to resolve before we send the data into getStaticProps
  const blogInfo = await Promise.all(posts);

  //We pass the paths/data into getStaticProps
  return {
    paths: blogInfo.map((post) => ({ params: { ...post.data } })),
    fallback: false,
  };
};`,
  mdx_blog_getStaticProps: `

  export const getStaticProps: GetStaticProps = async (context) => {
      //content of Context looks as followed
  //     context {
  //   params: { slug: 'mdx-blog' },
  //   locales: undefined,
  //   locale: undefined,
  //   defaultLocale: undefined
  // }

   //Params contains the slug we use that slug to find the correct file to grab the mdx data from
  const { params } = context;

  let blogData: any = null;
  if (params) {
    //we grab the file from our blog folder and then split the grey matter from the mdx data
    //and then pass both of them as props to our main component
    const directory = path.join(process.cwd(), \`blogs/\${params.slug}.mdx\`);
    let filenames = await fs.readFileSync(directory);
    const { data, content } = matter(filenames);
    const serializeData = await serialize(content);
    blogData = { ...data, serializeData };
  }

    return {
    props: {
      blogData,
    },
  };
};

`,

  mdx_blog_BlogComponent: `
const Blog = ({ blogData }: any) => {
  const { serializeData } = blogData;

  return (
    <BlogZone>
      <h1>{blogData.title}</h1>
      <MDXRemote {...serializeData} components={{ CodeBlock }} />
    </BlogZone>
  );
};
`,
};
