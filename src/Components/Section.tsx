import React from "react";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 8rem);
  grid-gap: 1.5rem;
`;

interface IProps {
  title: string;
  children: any;
}

export const Section: React.SFC<IProps> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);
