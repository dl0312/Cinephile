import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import { moviesApi } from "../../api";
import { Carousel } from "antd";
import { Loader } from "../../Components/Loader";

const Container = styled.div`
  margin: 30rem 0 10rem 0;
`;

interface IBackdropProps {
  bgImage: string;
}

const Backdrop = styled("div")<IBackdropProps>`
  @keyframes enlarging {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.97);
    }
    100% {
      transform: scale(1);
    }
  }
  width: 1210px !important;
  height: 685px;
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
  background-size: auto 100%;
  animation-name: enlarging;
  animation-duration: 20s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;

const SectionContainer = styled.div`
  width: 55.5rem;
  margin: 0 auto;
`;

interface IProps {
  movies: any;
  error: string | null;
  loading: boolean;
}

export const HomePresenter: React.SFC<IProps> = ({ movies, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <title>Home | Cinephile</title>
      </Helmet>
      <Container>
        <Carousel effect="fade" vertical easing={"ease-in-out"} autoplay={true}>
          {movies &&
            movies.map((movie: any, index: number) => (
              <Backdrop
                key={movie.id}
                bgImage={`https://image.tmdb.org/t/p/original${
                  movie.backdrop_path
                }`}
              />
            ))}
        </Carousel>
        {/* <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original/nadTlnTE6DdgmYsN4iWc2a2wiaI.jpg`}
      /> */}
        <SectionContainer>
          <Section title="현재 상영중" getAPI={moviesApi.nowPlaying} />
          <Section title="인기 작품" getAPI={moviesApi.popular} />
          <Section title="개봉 예정작" getAPI={moviesApi.upcoming} />
          <Section title="최고 평점작" getAPI={moviesApi.topRated} />
        </SectionContainer>
      </Container>
    </>
  );
