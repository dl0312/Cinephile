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

const CastInfoContainer = styled.div`
  margin-bottom: 1rem;
  font-family: "Thasadith", sans-serif;
  color: #cde;
  font-size: 0.9rem;
  width: 42rem;
  overflow: hidden;
`;

interface ICreditInfoProps {
  castPage: number;
}

const CastInfo = styled("div")<ICreditInfoProps>`
  height: 20rem;
  flex-flow: column wrap;
  display: flex;
  align-content: flex-start;
  transition: 1s ease;
  transform: translateX(-${props => props.castPage * 42}rem);
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

const ArrowIcon = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  opacity: 0.2;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
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
  castPage: number;
}

export default class Credit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      castPage: 0
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
    const { castPage } = this.state;
    const maxPage = Math.floor(cast.length / 5);
    console.log(this.props);
    return (
      <Container>
        {creditIndex === 0 && (
          <ArrowIcon
            style={{ left: "-2rem" }}
            onClick={() => {
              if (castPage === 0) {
                this.setState({ castPage: maxPage });
              } else this.setState({ castPage: castPage - 1 });
            }}
            className="fas fa-chevron-circle-left"
          />
        )}
        {creditIndex === 0 && (
          <ArrowIcon
            style={{ right: "-2rem" }}
            onClick={() => {
              if (castPage === maxPage) {
                this.setState({ castPage: 0 });
              } else this.setState({ castPage: castPage + 1 });
            }}
            className="fas fa-chevron-circle-right"
          />
        )}
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
          <CastInfoContainer>
            <CastInfo castPage={castPage}>
              {cast.map((people: any, index: number) => (
                <Actor key={people.id} people={people} />
              ))}
            </CastInfo>
          </CastInfoContainer>
        )}
        {creditIndex === 1 && (
          <CastInfoContainer>
            <CrewInfo>
              {directors.length !== 0 && (
                <Department>
                  <DepartmentText>감독</DepartmentText>
                  {directors.map((people: any, index: number) => (
                    <Crew key={people.id} people={people} />
                  ))}
                </Department>
              )}
              {producers.length !== 0 && (
                <Department>
                  <DepartmentText>제작</DepartmentText>
                  {producers.map((people: any, index: number) => (
                    <Crew key={people.id} people={people} />
                  ))}
                </Department>
              )}
              {writers.length !== 0 && (
                <Department>
                  <DepartmentText>각본</DepartmentText>
                  {writers.map((people: any, index: number) => (
                    <Crew key={people.id} people={people} />
                  ))}
                </Department>
              )}
              {editors.length !== 0 && (
                <Department>
                  <DepartmentText>편집</DepartmentText>
                  {editors.map((people: any, index: number) => (
                    <Crew key={people.id} people={people} />
                  ))}
                </Department>
              )}
              {cinematographies.length !== 0 && (
                <Department>
                  <DepartmentText>촬영</DepartmentText>
                  {cinematographies.map((people: any, index: number) => (
                    <Crew key={people.id} people={people} />
                  ))}
                </Department>
              )}
              {productionDesigns.length !== 0 && (
                <Department>
                  <DepartmentText>프로덕션 디자인</DepartmentText>
                  {productionDesigns.map((people: any, index: number) => (
                    <Crew key={people.id} people={people} />
                  ))}
                </Department>
              )}
              {composers.length !== 0 && (
                <Department>
                  <DepartmentText>음악</DepartmentText>
                  {composers.map((people: any, index: number) => (
                    <Crew key={people.id} people={people} />
                  ))}
                </Department>
              )}
              {costumes.length !== 0 && (
                <Department>
                  <DepartmentText>의상</DepartmentText>
                  {costumes.map((people: any, index: number) => (
                    <Crew key={people.id} people={people} />
                  ))}
                </Department>
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
