import * as React from "react";
import styled from "styled-components";

function PageContainer({
  idSection,
  children,
}: {
  idSection?: any;
  children?: any;
}) {
  return <Container id={idSection}>{children}</Container>;
}

export default PageContainer;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 280px) {
    width: 96%;
  }

  @media (min-width: 320px) {
    width: 92%;
  }

  @media (min-width: 520px) {
    width: 80%;
  }

  @media (min-width: 620px) {
    width: 70%;
  }

  @media (min-width: 768px) {
    width: 45em;
  }

  @media (min-width: 1440px) {
    width: 47em;
  }
`;
