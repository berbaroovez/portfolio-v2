import styled, { keyframes } from "styled-components";
import { quotes } from "../util/quotes";
import { useEffect, useState } from "react";
export default function SideQuote() {
  const [quote, setQuote] = useState<any>("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <QuoteDiv>
      <q>{quote.quote} </q>
      <figcaption>&mdash; {quote.author}</figcaption>
    </QuoteDiv>
  );
}

const rotate = keyframes`
  from {
    transform: translateX(-100px);
  }

  to {
    transform: translateX(0);
  }
`;

const QuoteDiv = styled.figure`
  /* width: 100px;
  height: 100px;
  background-color: red; */
  opacity: 0;
  width: 200px;
  position: absolute;
  top: 100px;
  left: 50px;
  font-weight: 600;
  font-size: 0.8rem;
  color: var(--main-grey-font-color);

  @media (min-width: 1000px) {
    opacity: 1;
  }
  /* animation: ${rotate} 2s linear infinite reverse; ; */
`;
