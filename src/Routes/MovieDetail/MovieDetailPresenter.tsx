import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Loader } from "../../Components/Loader";
import NoImage from "../../asset/popcorn.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 3rem;
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
      rgba(20, 24, 28, 1)
    ),
    linear-gradient(to bottom, transparent, rgba(20, 24, 28, 1)),
    url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 0;
`;

const Content = styled.div`
  padding-top: 25rem;
  padding-bottom: 2rem;
  width: 60rem;
  margin: 0 auto;
`;

const MediaInfo = styled.div`
  margin-right: 3rem;
  width: 15rem;
  float: left;
`;

const Cover = styled.img`
  width: 15rem;
  background: #161718;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(221, 238, 255, 0.35);
  display: inline-block;
  overflow: hidden;
  position: relative;
  -webkit-background-clip: padding-box;
  border-radius: 4px;
`;

const FilmStats = styled.ul`
  clear: both;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.6rem 0 0.3rem;
  text-align: center;
  list-style: none;
`;

const FilmStat = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.4rem;
  font-size: inherit;
  line-height: 1.38461538;
`;

const FilmStatIcon = styled.i`
  font-size: 0.8rem;
  margin-right: 0.3rem;
`;

const FilmStatText = styled.span``;

const Watch = styled.div`
  margin-top: 1.2rem;
  border: 1px solid #303840;
  background-color: #14181c;
  overflow: hidden;
  border-radius: 3px;
`;

const WatchTitle = styled.div`
  background: #242c34;
  color: #9ab;
  margin: 0;
  padding: 9px 12px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.075em;
`;

const WatchPanel = styled.p`
  color: #9ab;
  margin: 10px;
  margin-bottom: 1em;
  line-height: 1.5;
`;

const TrailerIcon = styled.i`
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: auto;
  left: auto;
  font-size: 1rem;
  margin-right: 0.4rem;
`;

const TrailerText = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  line-height: 1.66666667;
  min-width: 75px;
`;

const MoreService = styled.div`
  display: block;
  padding: 6px 10px 4px;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  font-size: 0.76923077rem;
  line-height: 1.3;
  border-top: 1px solid #303840;
  color: #678;
`;

const MoreServiceText = styled.div``;

const TextInfo = styled.div`
  position: relative;
  width: 42rem;
  float: right;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: -0.2rem 0 2rem;
`;

const Title = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 900;
  font-size: 2.46153846rem;
  margin: 0 0 0.6rem;
  color: #fff;
  line-height: 1.2;
`;

const Subtitle = styled.div`
  display: inline;
  max-width: 100%;
  font-size: 17px;
  line-height: 1.6;
  color: #9ab;
  text-shadow: #000 2px 0 5px;
  margin: 0;
  white-space: nowrap;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

const SideInfoSection = styled.div`
  padding-bottom: 3rem;
  width: 25rem;
  float: left;
`;

const Overview = styled.div`
  overflow: hidden;
  font-size: 1.23076923rem;
  line-height: 1.5625;
  margin-bottom: 0.625em;
`;

const Divider = styled.span`
  margin: 0 0.6rem;
`;

interface IProps {
  result: any;
  credit: any;
  error: string | null;
  loading: boolean;
}

export const MovieDetailPresenter: React.SFC<IProps> = ({
  result,
  credit,
  error,
  loading
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title} | Betterboxd</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <MediaInfo>
          <Cover
            src={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : NoImage
            }
          />
          <FilmStats>
            <FilmStat>
              <Link to={`/movie/${result.id}/members/`}>
                <FilmStatIcon
                  style={{ color: "chartreuse " }}
                  className="fas fa-eye"
                />
                <FilmStatText>54K</FilmStatText>
              </Link>
            </FilmStat>
            <FilmStat>
              <Link to={`/movie/${result.id}/lists/by/popular/`}>
                <FilmStatIcon
                  style={{ color: "skyblue" }}
                  className="fas fa-th-list"
                />
                <FilmStatText>24K</FilmStatText>
              </Link>
            </FilmStat>
            <FilmStat>
              <Link to={`/movie/${result.id}/likes/`}>
                <FilmStatIcon
                  style={{ color: "orange" }}
                  className="fas fa-heart"
                />
                <FilmStatText>28K</FilmStatText>
              </Link>
            </FilmStat>
            <FilmStat>
              <Link to={`/best`}>
                <FilmStatIcon
                  style={{ color: "yellow" }}
                  className="fas fa-crown"
                />
                <FilmStatText>6</FilmStatText>
              </Link>
            </FilmStat>
          </FilmStats>
          <Watch>
            <WatchTitle>WATCH</WatchTitle>
            <WatchPanel>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
                to={"/"}
              >
                <TrailerIcon className="fas fa-play-circle" />
                <TrailerText>예고편 보기</TrailerText>
              </Link>
            </WatchPanel>
            <MoreService>
              <Link to={"/"}>
                <MoreServiceText>MORE SERVICE</MoreServiceText>
              </Link>
            </MoreService>
          </Watch>
        </MediaInfo>
        <TextInfo>
          <TitleSection>
            <Title>{result.title}</Title>
            <Subtitle>
              {result.release_date.substring(0, 4)}
              <Divider>•</Divider> Directed by
            </Subtitle>
          </TitleSection>
          <SideInfoSection>
            <Overview>{result.overview}</Overview>
          </SideInfoSection>
        </TextInfo>
        {/* <Data>
          <ItemContainer>
            <Item>{result.release_date.substring(0, 4)}</Item>
            <Divider>•</Divider>
            <Item>{result.runtime} min</Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
        </Data> */}
      </Content>
    </Container>
  );

MovieDetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
