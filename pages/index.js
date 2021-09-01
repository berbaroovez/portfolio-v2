import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  return (
    <IndexDiv>
      <h1>car·ter ol·son</h1>
      <p>KARR-ter OAL-sen</p>
      <p className="def">A web developer focused on Creators and Web3. </p>
      <p className="aboutme">
        I love creating web apps that help creators connect with their audience
        better. Allowing them to grow their community is my main goal. More
        recently I've been exploring Ethereum and Solidity in the goal of
        getting a job in that field. Web3 technologies really intrigue me
        because they are one the natural payment layer of the internet and
        secondly because they allow the user to own their data.
      </p>
    </IndexDiv>
  );
}

const IndexDiv = styled.div`
  width: 90%;
  word-wrap: break-word;
  max-width: 500px;
  margin: 0 auto;

  h1 {
    color: var(--main-grey-font-hover-color);
    /* line-height: 1.5; */
  }
  p {
    font-size: 1em;
    color: var(--main-grey-font-color);
  }

  .def {
    color: var(--main-grey-font-hover-color);
    font-weight: 600;
    margin-bottom: 25px;
  }
  .aboutme {
    font-weight: 200;
    line-height: 2;
  }
`;
