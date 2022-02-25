import styled from "styled-components";
const Test = () => {
  return (
    <>
      <h1>Look this is my testing page don't snitch man </h1>{" "}
      <StripeButton>
        <FirstSpan className="first">Check Out</FirstSpan>{" "}
        <SecondSpan className="second">Submiting...</SecondSpan>{" "}
        <ThirdSpan className="third">Completed!</ThirdSpan>
      </StripeButton>
    </>
  );
};

const StripeButton = styled.button`
  overflow: hidden;
position: relative;
  border: none;
  padding: 5px 10px;
  width: 200px;
  background: #257bdf;
  .
`;

const ButtonSpans = styled.span`
  display: block;
`;
const FirstSpan = styled(ButtonSpans)`
  transform: translateY(0%);
  transition: transform 0.5s ease-in-out;

  ${StripeButton}:hover & {
    transform: translateY(-100%);
  }
`;
const SecondSpan = styled(ButtonSpans)`
  position: absolute;
  top: 15%;
  /* left: 50%; */
  transform: translate(50%, 100%);

  transition: transform 0.5s ease-in-out;

  ${StripeButton}:hover & {
    transform: translate(50%, 0%);
  }
`;
const ThirdSpan = styled(ButtonSpans)`
  position: absolute;
`;

export default Test;
