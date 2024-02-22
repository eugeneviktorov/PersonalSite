import * as React from "react";
import styled from "styled-components";
import { GlobalColors } from "./ColorTheme";
import { Link } from "react-router-dom";

function LinkTitle({ link, title }: { link: any; title: any }) {
  return (
    <Container>
      <Link to={link}>
        <Title>{title}</Title>
      </Link>
    </Container>
  );
}

export default LinkTitle;

const Container = styled.div`
  display: inline-block;
`;

const Title = styled.div`
  color: ${GlobalColors.ColorBlue};
`;
