import styled from "styled-components";
import PageTitles from "../components/PageTitles";
import { FunctionComponent } from "react";

export default function Contact() {
  return (
    <ContactDiv>
      <PageTitles title="Contact Tings" subtitle="sup" />
      <ContactInfo>
        <p>Email</p>
        <a href="mailto:carterolson3@gmail.com">carterolson3@gmail.com </a>
      </ContactInfo>
      <ContactInfo>
        <p>Discord</p>
        <h3>berbaroovez#0001 </h3>
      </ContactInfo>
    </ContactDiv>
  );
}

const ContactDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 500px;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
  p {
    font-size: 0.9em;
    color: var(--main-grey-font-color);
    font-weight: 500;
  }
  a,
  h3 {
    text-decoration: none;
    color: var(--main-grey-font-hover-color);
    font-weight: 600;
    font-size: 1.2em;
  }
`;
