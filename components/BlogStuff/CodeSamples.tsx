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

  mdx_blog_mdx_example: `
### Get Static Props

My main component is extremely simple. All I do is set the header to the title
from the props and then pass the blog content into a next-mdx-remote component.
This component takes the data from the mdx file and renders it to html. You can
expand this component to add SEO related information to your blog posts or even
a header image. The options are pretty much endless. That also means you can add
as much info in your grey matter as you want.

<CodeBlock text={"mdx_blog_BlogComponent"} language="jsx" />

<br />
`,

  use_auth_AuthProvider: `
  // Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

`,
  use_auth_useAuth: `export const useAuth = () => {
  return useContext(authContext);
};
`,
  use_auth_AuthObjectFunction: `
const useProvideAuth = () => {
  const [user, setUser] = useState<null | string>(null);

  const sendMagicLink = async (
    email: string,
    schoolName: string | null = null
  ) => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
      
      })
      .catch((error) => {
 
      });
  };


  const handleUser = (user: User | null) => {
    if (user) {
      setUser(user.email);
    } else {
      setUser(null);
    }
  };

  //This is a listener that listens for changes in the user state provided
  // by firebase so anytime the user changes it will update the state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      handleUser(user);
    });

    return () => unsubscribe();
  }, []);

  return {
    sendMagicLink,
    user,
  };
};
`,
  use_auth_createContext: `const authContext = createContext<AuthContextData>(authContextDefaultValue)
`,
  use_auth_defaultTypes: `
  export interface AuthContextData {
  user: string | null;
  sendMagicLink: (email: string, schoolName: string | null) => Promise<void>;
  confirmMagicLink: () => Promise<void>;
  firebaseSignOut: () => void;
}
export const authContextDefaultValue: AuthContextData = {
  user: null,
  sendMagicLink: () => Promise.reject("not implemented"),
  confirmMagicLink: () => Promise.reject("not implemented"),
  firebaseSignOut: () => {},
};
`,
};
