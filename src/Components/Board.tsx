import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Container = styled.div``;

export default class Board extends React.Component {
  render() {
    return (
      <Container>
        <Button icon="edit" type="primary">
          <Link to={"/community/add"}>글쓰기</Link>
        </Button>
        <table />
        <Button icon="edit" type="primary">
          <Link to={"/community/add"}>글쓰기</Link>
        </Button>
      </Container>
    );
  }
}
