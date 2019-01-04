import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Loader } from "../../Components/Loader";
import NoImage from "../../asset/popcorn.png";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import Credit from "../../Components/Credit";

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
  top: -5rem;
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
  margin: 0.6rem 0 1.2rem;
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
  margin: 0.3rem 0.6rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const TrailerIcon = styled.i`
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: auto;
  left: auto;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: -0.2rem 0 1rem;
`;

const Title = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 800;
  font-size: 2.46153846rem;
  margin: 0 0 0.6rem;
  color: #fff;
  line-height: 1.2;
  text-shadow: 0px 5px 5px #0a0e27;
`;

const Subtitle = styled.div`
  display: inline;
  max-width: 100%;
  font-size: 17px;
  line-height: 1.6;
  color: #9ab;
  text-shadow: #000 2px 0 5px;
  margin: 0;
  white-space: pre-wrap;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

const SideInfoSection = styled.div`
  padding-bottom: 3rem;
  float: left;
`;

const Overview = styled.div`
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.5625;
  margin-bottom: 0.625em;
`;

const Divider = styled.span`
  margin: 0 0.2rem;
`;

const Sidebar = styled.aside`
  padding-bottom: 3rem;
  width: 15rem;
`;

const UserPanel = styled.ul`
  margin-bottom: 1.5rem;
  font-size: 0.8rem;
  color: #bcd;
`;

const UserActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserAction = styled.li`
  padding: 1rem 0;
  width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #456;
  margin-bottom: 1px;
`;

const UserActionIcon = styled.i`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const UserActionText = styled.span``;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  margin-bottom: 1px;
  background-color: #456;
`;

const RatingText = styled.span`
  margin-bottom: 0.2rem;
`;

const AddReview = styled.div`
  background-color: #456;
  padding: 1rem 0;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddList = styled.div`
  background-color: #456;
  padding: 1rem 0;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Share = styled.div`
  background-color: #456;
  padding: 1rem 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IProps {
  result: any;
  cast: any;
  directors: any;
  producers: any;
  writers: any;
  editors: any;
  cinematographies: any;
  productionDesigns: any;
  composers: any;
  costumes: any;
  creditIndex: number;
  error: string | null;
  loading: boolean;
  handleCreditIndexChange: (creditIndex: number) => void;
}

export const MovieDetailPresenter: React.SFC<IProps> = ({
  result,
  cast,
  directors,
  producers,
  writers,
  editors,
  cinematographies,
  productionDesigns,
  composers,
  costumes,
  creditIndex,
  error,
  loading,
  handleCreditIndexChange
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title} | Cinephile</title>
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
              <Link to={`/film/${result.id}/lists/by/popular/`}>
                <FilmStatIcon
                  style={{ color: "skyblue" }}
                  className="fas fa-th-list"
                />
                <FilmStatText>24K</FilmStatText>
              </Link>
            </FilmStat>
            <FilmStat>
              <Link to={`/film/${result.id}/likes/`}>
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
            <WatchTitle>관련 미디어</WatchTitle>
            <WatchPanel>
              {result.homepage && (
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    margin: "0.3rem 0"
                  }}
                  target="_blank"
                  href={result.homepage}
                >
                  <TrailerIcon className="fas fa-home" />
                  <TrailerText>{`${result.title} 홈페이지`}</TrailerText>
                </a>
              )}
              {result.videos.results.map((video: any, index: number) => (
                <a
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    margin: "0.3rem 0"
                  }}
                  target="_blank"
                  href={
                    video.site === "YouTube"
                      ? `https://www.youtube.com/watch?v=${video.key}`
                      : "/"
                  }
                >
                  <TrailerIcon className="fas fa-play-circle" />
                  <TrailerText>
                    {video.type === "Trailer"
                      ? `${result.title} 예고편`
                      : "무슨영상일까~~~요?"}
                  </TrailerText>
                </a>
              ))}
            </WatchPanel>
            <MoreService>
              <Link to={"/"}>
                <MoreServiceText>더 많은 서비스</MoreServiceText>
              </Link>
            </MoreService>
          </Watch>
          <Sidebar>
            <UserPanel>
              <UserActionContainer>
                <UserAction style={{ borderTopLeftRadius: 4 }}>
                  <UserActionIcon className="far fa-eye" />
                  <UserActionText>봤어요</UserActionText>
                </UserAction>
                <UserAction>
                  <UserActionIcon className="far fa-heart" />
                  <UserActionText>좋아요</UserActionText>
                </UserAction>
                <UserAction style={{ borderTopRightRadius: 4 }}>
                  <UserActionIcon className="far fa-clock" />
                  <UserActionText>보고싶어요</UserActionText>
                </UserAction>
              </UserActionContainer>
              <RatingContainer>
                <RatingText>평점</RatingText>
                <Rate
                  style={{ fontSize: 30, color: "goldenrod", marginLeft: 10 }}
                  allowHalf
                />
              </RatingContainer>
              <AddReview>리뷰 작성</AddReview>
              <AddList>컬렉션 추가</AddList>
              <Share>공유</Share>
            </UserPanel>
          </Sidebar>
        </MediaInfo>
        <TextInfo>
          <TitleSection>
            <Title>{result.title}</Title>
            <Subtitle>
              <Link
                style={{ textDecoration: "underline" }}
                to={`/movies/year/${result.release_date.substring(0, 4)}`}
              >
                {result.release_date.substring(0, 4)}
              </Link>
              <Divider>•</Divider>
              {result.genres.map((genre: any, index: number) => {
                return (
                  <>
                    <Link
                      style={{
                        textDecoration: "underline"
                      }}
                      to={`/genre/${genre.id}`}
                    >
                      {genre.name}
                    </Link>
                    {result.genres.length - 1 !== index && <span>, </span>}
                  </>
                );
              })}
              <Divider>•</Divider>
              {result.production_countries.map(
                (country: any, index: number) => (
                  <>
                    <Link
                      style={{
                        textDecoration: "underline"
                      }}
                      to={`/country/${country.id}`}
                    >
                      {country.name}
                    </Link>
                    {result.production_countries.length - 1 !== index && (
                      <span>, </span>
                    )}
                  </>
                )
              )}
              <Divider>•</Divider>
              {`${Math.floor(result.runtime / 60)}시간 ${result.runtime %
                60}분`}
              <Divider>•</Divider>Directed by
              {directors.map((director: any, index: number) => {
                console.log(director, index);
                return (
                  <>
                    <Link
                      style={{
                        marginLeft: "0.3rem",
                        textDecoration: "underline"
                      }}
                      to={`/director/${director.name}/`}
                    >
                      {director.name}
                    </Link>
                    {directors.length - 1 !== index && <span>,</span>}
                  </>
                );
              })}
            </Subtitle>
          </TitleSection>
          <SideInfoSection>
            <Overview>{result.overview}</Overview>
            <Credit
              creditIndex={creditIndex}
              result={result}
              cast={cast}
              directors={directors}
              producers={producers}
              writers={writers}
              editors={editors}
              cinematographies={cinematographies}
              productionDesigns={productionDesigns}
              composers={composers}
              costumes={costumes}
              handleCreditIndexChange={handleCreditIndexChange}
            />
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
