import React from "react";
import styled from "styled-components";
import { moviesApi } from "../../api";
import Section from "../../Components/Section";
import { Loader } from "../../Components/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface IProfileProps {
  url: string;
}

const Profile = styled("div")<IProfileProps>`
  background: url(${props => props.url});
  background-size: 100% auto;
  background-position: center center;
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  margin-bottom: 2rem;
`;

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  font-family: "Thasadith", sans-serif;
  border: 2px solid white;
  border-radius: 25px;
  padding: 0.5rem;
  margin-bottom: 2rem;
`;

const SectionContainer = styled.div`
  width: 55.5rem;
  margin: 0 auto;
`;

interface IProps {
  person: any;
  id: string;
  error: string | null;
  loading: boolean;
}

const PersonDetailPresenter: React.SFC<IProps> = ({
  person,
  id,
  error,
  loading
}) => {
  console.log(person);
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Profile url={`https://image.tmdb.org/t/p/w500${person.profile_path}`} />
      <Name>{person.name}</Name>
      <SectionContainer>
        <Section title="필모그래피" id={id} getAPI={moviesApi.filmograpy} />
      </SectionContainer>
    </Container>
  );
};
export default PersonDetailPresenter;
