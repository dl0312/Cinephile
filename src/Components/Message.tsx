import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${props => props.color};
`;

interface IProps {
  text: string;
  color: string;
}

export const Message: React.SFC<IProps> = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);
