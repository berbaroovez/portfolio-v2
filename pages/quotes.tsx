import styled from "styled-components";
import PageTitles from "../components/PageTitles";
import { quotes } from "../util/quotes";
export default function Quotes() {
  return (
    <QuotesDiv>
      <PageTitles title="Quotes" subtitle="some of my favorite quotes" />

      {quotes.map((quote, index) => (
        <QuoteBlock>
          <q>{quote.quote}</q>
          <figcaption>&mdash; {quote.author}</figcaption>
        </QuoteBlock>
      ))}
    </QuotesDiv>
  );
}

const QuotesDiv = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
`;

const QuoteBlock = styled.figure`
  figcaption {
    font-weight: 500;
  }

  padding: 10px 20px;
  margin: 10px 0;
  background: #fafafa;
  border-radius: 5px;
`;
//©2021
