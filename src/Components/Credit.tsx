import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
`;

interface IItemProps {
  selected: boolean;
}

const Item = styled("li")<IItemProps>`
  padding-bottom: 0.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  letter-spacing: 0.075rem;
  color: ${props => (props.selected ? "white" : "violet")};
  transition: 0.5s ease-in-out;
  border-bottom: ${props =>
    props.selected ? "2px solid white" : "2px solid transparent"};
  &:hover {
    border-bottom: ${props =>
      props.selected ? "2px solid white" : "2px solid violet"};
  }
`;

interface IProps {
  creditIndex: number;
  handleCreditIndexChange: (creditIndex: number) => void;
}

export default class Credit extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    const { creditIndex, handleCreditIndexChange } = this.props;
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
              제작
            </Item>
            <Item
              onClick={() => handleCreditIndexChange(2)}
              selected={creditIndex === 2}
            >
              세부사항
            </Item>
            <Item
              onClick={() => handleCreditIndexChange(3)}
              selected={creditIndex === 3}
            >
              장르
            </Item>
          </List>
        </Header>
      </Container>
    );
  }
}
