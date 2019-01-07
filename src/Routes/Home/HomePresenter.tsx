import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import { moviesApi } from "../../api";

const Container = styled.div`
  margin: 30rem 0;
`;

interface IBackdropProps {
  bgImage: string;
}

const Backdrop = styled("div")<IBackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 1200px;
  height: 675px;
  left: 50%;
  transform: translateX(-50%);
  background-image: linear-gradient(
      to right,
      rgba(20, 24, 28, 1),
      transparent,
      transparent,
      transparent,
      rgba(20, 24, 28, 1)
    ),
    linear-gradient(
      to bottom,
      transparent,
      transparent,
      transparent,
      rgba(20, 24, 28, 1)
    ),
    url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 0;
`;

const SectionContainer = styled.div`
  width: 55.5rem;
  margin: 0 auto;
`;

interface IProps {}

export const HomePresenter: React.SFC<IProps> = ({}) => (
  <>
    <Helmet>
      <title>Film | Betterboxd</title>
    </Helmet>
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/nadTlnTE6DdgmYsN4iWc2a2wiaI.jpg`}
      />
      <SectionContainer>
        <Section title="현재 상영중" getAPI={moviesApi.nowPlaying} />
        <Section title="인기 작품" getAPI={moviesApi.popular} />
        <Section title="개봉 예정작" getAPI={moviesApi.upcoming} />
      </SectionContainer>
    </Container>
  </>
);
