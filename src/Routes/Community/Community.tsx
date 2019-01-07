import React from "react";
import styled from "styled-components";
import Board from "../../Components/Board";
import Featured from "../../Components/Featured";

const Container = styled.div``;

const FeaturedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default class Community extends React.Component {
  render() {
    return (
      <>
        <Container>
          <FeaturedContainer>
            <Featured />
            <Featured />
          </FeaturedContainer>
          <Board />
        </Container>
      </>
    );
  }
}
