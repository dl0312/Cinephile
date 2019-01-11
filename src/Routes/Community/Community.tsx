import React from "react";
import styled from "styled-components";
import Board from "../../Components/Board";
import Featured from "../../Components/Featured";
import { RouteComponentProps } from "react-router";

const Container = styled.div`
  color: black;
  background-color: #f5f0eb;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 3rem;
  a {
    color: black;
  }
`;

const FeaturedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface IProps extends RouteComponentProps<any> {}

export default class Community extends React.Component<IProps, {}> {
  render() {
    const page = parseInt(this.props.match.params.page);
    return (
      <>
        <Container>
          <FeaturedContainer>
            <Featured />
            <Featured />
          </FeaturedContainer>
          <Board page={page} />
        </Container>
      </>
    );
  }
}
