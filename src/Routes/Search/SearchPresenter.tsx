import React from "react";
import styled from "styled-components";
import Section from "../../Components/Section";
import { moviesApi } from "../../api";

const Container = styled.div``;

interface IProps {
  term: string;
}

export const SearchPresenter: React.SFC<IProps> = ({ term }) => (
  <Container>
    <Section
      title={`'${term}'에 대한 검색결과`}
      getAPI={moviesApi.search}
      term={term}
    />
  </Container>
);
