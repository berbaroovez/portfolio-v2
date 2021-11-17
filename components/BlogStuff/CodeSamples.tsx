export default {
  mdx_blog: `export const getStaticPaths: GetStaticPaths = async () => {
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
};`,
  jsx: `class HelloMessage extends React.Component {
  handlePress = () => {
    alert('Hello')
  }
  render() {
    return (
      <div>
        <p>Hello {this.props.name}</p>
        <button onClick={this.handlePress}>Say Hello</button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />, 
  mountNode 
);`,
  julia: `println("Hello, World!")`,
  kotlin: `fun main(args : Array<String>) {
  println("Hello, world!")
}
`,
  lisp: `(defun hello-world()
"Display the string hello world."
  (interactive)
  (message "hello world"))
`,
  makefile: `all:
  @echo "Hello world!"
`,
  matlab: `disp("Hello World");`,
  objectivec: `#include <stdio.h>
#include <objpak.h>
int
main (int argc, char **argv)
{
  id set =[Set new];
  argv++;
  while (--argc)
  [set add: [String str:*argv++]];
  [set
   do
  :{
    :each | printf ("hello, %s!\n",[each str]);
   }
  ];
  return 0;
  }
`,
  ocaml: `print_string "Hello World!\n";;`,
  php: `<?php
  echo "Hello World!";
?>
`,
  python: `# Hello world in Python 2
print "Hello World"

# Hello world in Python 3 (aka Python 3000)
print("Hello World")
`,
  r: `cat("Hello world\n")`,
  ruby: `puts "Hello World!"`,
  rust: `fn main() {
  println!("Hello World!");
}
`,
  scala: `object HelloWorld extends App {
  println("Hello world!")
}
`,
  sql: `SELECT "Hello World";`,
  swift: `println("Hello, world!")`,
  tsx: `import * as React from "react";

export class HelloWorld extends React.Component<any, any> {
    render() {
        return <div>Hello world!It's from Helloword Component.</div>;
    }
}`,
  typescript: `var exclamation: string = "Hello";
var noun: string = "World";
console.log(exclamation + noun);
`,
};
