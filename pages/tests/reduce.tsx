import { motion } from "framer-motion";
import styled from "styled-components";

const Test = () => {
  return (
    <TestZone>
      <TestDiv
        initial={{ opacity: 0, x: -100 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 1,
          delay: 2,
        }}
      ></TestDiv>
    </TestZone>
  );
};

const TestZone = styled.div``;
const TestDiv = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export default Test;
