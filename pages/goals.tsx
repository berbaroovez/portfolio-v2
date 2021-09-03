import styled from "styled-components";
import PageTitles from "../components/PageTitles";

export default function Goals() {
  return (
    <GoalsDiv>
      <PageTitles
        title="Goals 🥅"
        subtitle="They play soccer in my backyard, I think I see Messi"
      />
      <ol>
        <li className="done">Learn Web Programming</li>
        <li className="done">Learn React</li>
        <li className="done">Get an internship</li>
        <li>Get a job</li>
        <li>Learn solidity</li>
        <li>Create an dApp</li>
        <li>Always learn in public</li>
      </ol>
    </GoalsDiv>
  );
}

const GoalsDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 500px;

  li {
    color: var(--main-grey-font-hover-color);
  }

  /* color: red; */
  .done {
    color: var(--main-grey-font-color);
    text-decoration: line-through;
  }
`;
