import React from "react";
import styled from "styled-components";
import { Section } from "../../Components/Section";
import { Loader } from "../../Components/Loader";
import { Poster } from "../../Components/Poster";
import { Message } from "../../Components/Message";

const Container = styled.div``;

interface IProps {
  movieResults: any;
  error: string | null;
  loading: boolean;
}

export const SearchPresenter: React.SFC<IProps> = ({
  movieResults,
  error,
  loading
}) => (
  <Container>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length !== 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie: any) => (
              <Poster
                key={movie.id}
                title={movie.title}
                id={movie.id}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {/* {tvResults && tvResults.length !== 0 && (
          <Section title="TV Show Results">
            {tvResults.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imageUrl={show.poster_path}
                rating={show.vote_average}
                year={show.release_date && show.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )} */}
        {error && <Message color="#e74c3c" text={error} />}
        {movieResults && movieResults.length === 0 && (
          <Message text="Nothing found" color="#95a5a6" />
        )}
      </>
    )}
  </Container>
);
