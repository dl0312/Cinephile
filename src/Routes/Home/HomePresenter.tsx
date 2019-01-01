import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Section } from "../../Components/Section";
import { Loader } from "../../Components/Loader";
import { Poster } from "../../Components/Poster";
import { Message } from "../../Components/Message";

const Container = styled.div``;

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
      <title>Movie | Betterboxd</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length !== 0 && (
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                title={movie.title}
                id={movie.id}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {popular && popular.length !== 0 && (
          <Section title="Popular">
            {popular.map(movie => (
              <Poster
                key={movie.id}
                title={movie.title}
                id={movie.id}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length !== 0 && (
          <Section title="Upcoming">
            {upcoming.map(movie => (
              <Poster
                key={movie.id}
                title={movie.title}
                id={movie.id}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);
