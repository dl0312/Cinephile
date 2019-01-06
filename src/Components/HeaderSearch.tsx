import React from "react";
import styled from "styled-components";
import { withRouter, RouteComponentProps } from "react-router-dom";

const Container = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchToggleIcon = styled.i`
  font-size: 1.2rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const ExecuteSearchIcon = styled.i`
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  right: 0.5rem;
  color: #555;
`;

interface ISearchTermProps {
  isSearchMode: boolean;
}

const SearchTerm = styled("input")<ISearchTermProps>`
  width: ${props => (props.isSearchMode ? "150px" : "0px")};
  height: 1.7rem;
  transition: 0.5s ease;
  border: none;
  border-radius: 10px;
  background-color: white;
  opacity: ${props => (props.isSearchMode ? "1" : "0")};
  padding: ${props => (props.isSearchMode ? "0 2rem 0 0.5rem" : "0")};
  color: #555;
  font-weight: 500;
  overflow: hidden;
`;

interface IProps extends RouteComponentProps<any> {}

interface IState {
  isSearchMode: boolean;
  searchTerm: string;
}

class HeaderSearch extends React.Component<IProps, IState> {
  inputRef: any;
  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      isSearchMode: false,
      searchTerm: ""
    };
  }

  handleOnChange = (e: any) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleOnClickToggleIcon = (currentSearchMode: boolean) => {
    if (currentSearchMode) {
      this.setState({ isSearchMode: !currentSearchMode });
    } else {
      this.inputRef.current.focus();
      this.setState({ isSearchMode: !currentSearchMode });
    }
  };

  handleOnClickExecuteSearchIcon = () => {
    this.props.history.push({
      pathname: `/search/${this.state.searchTerm}`
    });
  };

  handleOnKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      this.props.history.push({
        pathname: `/search/${this.state.searchTerm}`
      });
    }
  };

  render() {
    const { isSearchMode, searchTerm } = this.state;
    return (
      <Container>
        <SearchToggleIcon
          onClick={() => this.handleOnClickToggleIcon(isSearchMode)}
          className={isSearchMode ? "fas fa-times" : "fas fa-search"}
        />
        <SearchTerm
          ref={this.inputRef}
          isSearchMode={isSearchMode}
          value={searchTerm}
          onChange={this.handleOnChange}
          onKeyDown={this.handleOnKeyDown}
        />
        {isSearchMode && (
          <ExecuteSearchIcon
            onClick={this.handleOnClickExecuteSearchIcon}
            className={"fas fa-search"}
          />
        )}
      </Container>
    );
  }
}

export default withRouter(HeaderSearch);
