interface CodeBlockProps {
  text: string;
  language: string;
}
import { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeSamples from "./CodeSamples";
const CodeBlock = ({ language, text }: CodeBlockProps) => {
  const [codeSlug, setCodeSlug] = useState("");

  useEffect(() => {
    if (text === "mdx_blog") {
      setCodeSlug(CodeSamples.mdx_blog);
    }
  }, []);

  return (
    <div>
      <CopyBlock
        language={"jsx"}
        text={codeSlug}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

export default CodeBlock;
