interface CodeBlockProps {
  text: string;
  language: string;
}
import styled from "styled-components";
import { useState, useEffect } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CodeSamples from "./CodeSamples";
const CodeBlock = ({ language, text }: CodeBlockProps) => {
  const [codeSlug, setCodeSlug] = useState("");

  useEffect(() => {
    if (text) {
      setCodeSlug(CodeSamples[text]);
    }
  }, []);

  return (
    <CodeZone>
      <CopyBlock
        language={"jsx"}
        text={codeSlug}
        showLineNumbers={true}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </CodeZone>
  );
};

const CodeZone = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;
export default CodeBlock;
