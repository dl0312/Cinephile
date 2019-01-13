import React from "react";
import styled from "styled-components";
import Actor from "./Actor";
import Crew from "./Crew";
import Company from "./Company";

const Container = styled.div`
  position: relative;
  margin-top: 2rem;
`;

const Header = styled.header`
  border-bottom: 1px solid #456;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 42rem;
`;

interface IItemProps {
  selected: boolean;
}

const Item = styled("li")<IItemProps>`
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.075rem;
  color: ${props => (props.selected ? "white" : "MediumTurquoise")};
  transition: 0.5s ease-in-out;
  cursor: pointer;
  border-bottom: ${props =>
    props.selected ? "2px solid white" : "2px solid transparent"};
  &:hover {
    border-bottom: ${props =>
      props.selected ? "2px solid white" : "2px solid MediumTurquoise"};
  }
`;

interface ICastInfoContainerProps {
  isFullData?: boolean;
}

const CastInfoContainer = styled("div")<ICastInfoContainerProps>`
  height: ${props => (props.isFullData ? "100%" : "27.5rem")};
  margin-bottom: 1rem;
  font-family: "Thasadith", sans-serif;
  color: #cde;
  font-size: 0.9rem;
  width: 42rem;
  transition: 10s ease-in-out;
  overflow: hidden;
`;

const CastInfo = styled.div`
  flex-flow: row wrap;
  display: flex;
  align-content: flex-start;
  transition: 1s ease;
`;

// const CrewContainer = styled.div`
//   margin-bottom: 1rem;
//   color: #cde;
//   font-size: 0.9rem;
//   width: 42rem;
// `;

const CrewInfo = styled.div`
  flex-flow: column wrap;
  display: flex;
  align-content: flex-start;
  transition: 1s ease;
`;

const Department = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin-bottom: 1rem;
  font-family: "Thasadith", sans-serif;
`;

const DepartmentText = styled.div`
  font-size: 1rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
`;

const DetailInfo = styled.div`
  flex-flow: column wrap;
  display: flex;
  align-content: flex-start;
  transition: 1s ease;
`;

const DetailOption = styled.div`
  margin-bottom: 1rem;
  font-family: "Thasadith", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailOptionText = styled.div`
  font-size: 1rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;

const DetailItemContainer = styled.div`
  width: 21rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const DetailItemText = styled.div`
  font-size: 1rem;
  font-weight: 900;
  font-family: "Thasadith", sans-serif;
`;

const More = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  padding-top: 3rem;
  width: 100%;
  text-align: center;
  background-image: linear-gradient(
    to bottom,
    transparent,
    rgba(20, 24, 28, 1),
    rgba(20, 24, 28, 1)
  );
`;

const MoreIcon = styled.i`
  cursor: pointer;
  font-size: 2rem;
  @keyframes floating {
    0% {
      transform: 0;
    }
    40% {
      transform: translateY(0.5rem);
    }
    60% {
      transform: 0;
    }
    80% {
      transform: translateY(0.5rem);
    }
    100% {
      transform: 0;
    }
  }
  &:hover {
    animation-name: floating;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
`;

interface IProps {
  creditIndex: number;
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
  handleCreditIndexChange: (creditIndex: number) => void;
}

interface IState {
  castMore: boolean;
  crewMore: boolean;
}

export default class Credit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      castMore: false,
      crewMore: false
    };
  }
  render() {
    const {
      creditIndex,
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
      handleCreditIndexChange
    } = this.props;
    const { castMore, crewMore } = this.state;
    console.log(this.props);
    return (
      <Container>
        <Header>
          <List>
            <Item
              onClick={() => handleCreditIndexChange(0)}
              selected={creditIndex === 0}
            >
              출연
            </Item>
            <Item
              onClick={() => handleCreditIndexChange(1)}
              selected={creditIndex === 1}
            >
              제작진
            </Item>
            <Item
              onClick={() => handleCreditIndexChange(2)}
              selected={creditIndex === 2}
            >
              세부사항
            </Item>
            {/* <Item
              onClick={() => handleCreditIndexChange(3)}
              selected={creditIndex === 3}
            >
              장르
            </Item> */}
          </List>
        </Header>
        {creditIndex === 0 && (
          <CastInfoContainer isFullData={castMore}>
            {!castMore && (
              <More>
                <MoreIcon
                  onClick={() => this.setState({ castMore: true })}
                  className="fas fa-caret-down"
                />
              </More>
            )}
            <CastInfo>
              {cast.map((people: any, index: number) => (
                <Actor key={index} people={people} />
              ))}
            </CastInfo>
          </CastInfoContainer>
        )}
        {creditIndex === 1 && (
          <CastInfoContainer isFullData={crewMore}>
            {!crewMore && (
              <More>
                <MoreIcon
                  onClick={() => this.setState({ crewMore: true })}
                  className="fas fa-caret-down"
                />
              </More>
            )}
            <CrewInfo>
              {directors.length !== 0 && (
                <>
                  <DepartmentText>감독</DepartmentText>
                  <Department>
                    {directors.map((people: any, index: number) => (
                      <Crew key={index} people={people} />
                    ))}
                  </Department>
                </>
              )}
              {producers.length !== 0 && (
                <>
                  <DepartmentText>제작</DepartmentText>
                  <Department>
                    {producers.map((people: any, index: number) => (
                      <Crew key={index} people={people} />
                    ))}
                  </Department>
                </>
              )}
              {writers.length !== 0 && (
                <>
                  <DepartmentText>각본</DepartmentText>
                  <Department>
                    {writers.map((people: any, index: number) => (
                      <Crew key={index} people={people} />
                    ))}
                  </Department>
                </>
              )}
              {editors.length !== 0 && (
                <>
                  <DepartmentText>편집</DepartmentText>
                  <Department>
                    {editors.map((people: any, index: number) => (
                      <Crew key={index} people={people} />
                    ))}
                  </Department>
                </>
              )}
              {cinematographies.length !== 0 && (
                <>
                  <DepartmentText>촬영</DepartmentText>
                  <Department>
                    {cinematographies.map((people: any, index: number) => (
                      <Crew key={index} people={people} />
                    ))}
                  </Department>
                </>
              )}
              {productionDesigns.length !== 0 && (
                <>
                  <DepartmentText>프로덕션 디자인</DepartmentText>
                  <Department>
                    {productionDesigns.map((people: any, index: number) => (
                      <Crew key={index} people={people} />
                    ))}
                  </Department>
                </>
              )}
              {composers.length !== 0 && (
                <>
                  <DepartmentText>음악</DepartmentText>
                  <Department>
                    {composers.map((people: any, index: number) => (
                      <Crew key={index} people={people} />
                    ))}
                  </Department>
                </>
              )}
              {costumes.length !== 0 && (
                <>
                  <DepartmentText>의상</DepartmentText>
                  <Department>
                    {costumes.map((people: any, index: number) => (
                      <Crew key={index} people={people} />
                    ))}
                  </Department>
                </>
              )}
            </CrewInfo>
          </CastInfoContainer>
        )}
        {creditIndex === 2 && (
          <CastInfoContainer>
            <DetailInfo>
              <DetailOption>
                <DetailOptionText>스튜디오</DetailOptionText>
                <DetailItemContainer>
                  {result.production_companies.map((company: any) => (
                    <Company company={company} />
                  ))}
                </DetailItemContainer>
              </DetailOption>
              <DetailOption>
                <DetailOptionText>국가</DetailOptionText>
                <DetailItemContainer>
                  {result.production_countries.map((country: any) => (
                    <DetailItemText>{country.name}</DetailItemText>
                  ))}
                </DetailItemContainer>
              </DetailOption>
              <DetailOption>
                <DetailOptionText>언어</DetailOptionText>
                <DetailItemContainer>
                  {result.spoken_languages.map((language: any) => (
                    <DetailItemText>{language.name}</DetailItemText>
                  ))}
                </DetailItemContainer>
              </DetailOption>
            </DetailInfo>
          </CastInfoContainer>
        )}
      </Container>
    );
  }
}
