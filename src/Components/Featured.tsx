import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
`;

export default class Featured extends React.Component {
  render() {
    return <Container>1일 조회순</Container>;
  }
}
