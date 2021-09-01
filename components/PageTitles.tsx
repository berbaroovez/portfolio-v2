import styled from "styled-components";

interface PageTitlesProps {
  title: string;
  subtitle: string;
}

const PageTitles = ({ title, subtitle }: PageTitlesProps) => {
  return (
    <>
      <Title>{title}</Title> <Subtitle>{subtitle}</Subtitle>
    </>
  );
};
const Title = styled.h1``;
const Subtitle = styled.h2`
  position: relative;
  color: var(--main-grey-font-color);
  font-size: 1.2rem;
  padding-left: 10px;
  font-weight: 600;
  padding-bottom: 20px;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--main-grey-color);

    bottom: 10px;
    left: 0;
  }
`;

export default PageTitles;
