import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Section } from "../../Components/Section";
import { Loader } from "../../Components/Loader";
import { Poster } from "../../Components/Poster";
import { Message } from "../../Components/Message";

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

interface IProps {
  nowPlaying: any[] | null;
  popular: any[] | null;
  upcoming: any[] | null;
  error: string | null;
  loading: boolean;
}

export const HomePresenter: React.SFC<IProps> = ({
  nowPlaying,
  popular,
  upcoming,
  error,
  loading
}) => (
  <>
    <Helmet>
      <title>Film | Betterboxd</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Backdrop
          bgImage={`https://image.tmdb.org/t/p/original/nadTlnTE6DdgmYsN4iWc2a2wiaI.jpg`}
        />
        <SectionContainer>
          {nowPlaying && nowPlaying.length !== 0 && (
            <Section title="현재 상영중">
              {nowPlaying.map(movie => (
                <Poster
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {popular && popular.length !== 0 && (
            <Section title="인기 작품">
              {popular.map(movie => (
                <Poster
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
          {upcoming && upcoming.length !== 0 && (
            <Section title="개봉 예정작">
              {upcoming.map(movie => (
                <Poster
                  key={movie.id}
                  title={movie.title}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                />
              ))}
            </Section>
          )}
        </SectionContainer>
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);
