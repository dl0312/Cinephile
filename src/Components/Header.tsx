import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import Logo from "../asset/logo.png";

interface IGradientBackgroundProps {
  darken: boolean;
}

const GradientBackground = styled("div")<IGradientBackgroundProps>`
  top: 0;
  bottom: -2rem;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  opacity: ${props => (props.darken ? "1" : "0.5")};
  background: linear-gradient(to bottom, rgba(20, 20, 20, 1), transparent);
  transition: 1s ease-in-out;
`;

const Container = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    ${GradientBackground} {
      opacity: 1;
    }
  }
`;

const List = styled.ul`
  margin: 0 auto;
  height: 6rem;
  width: 60rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  height: 3rem;
  position: relative;
  z-index: 2;
`;

interface IItemProps {
  current: boolean;
}

const Item = styled("li")<IItemProps>`
  width: 6rem;
  height: 3rem;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Nanum Gothic", sans-serif;

  position: relative;
  z-index: 2;
  /* letter-spacing: 0.5rem; */
`;

interface IProps extends RouteComponentProps<any> {
  isLoggedIn: boolean;
}

interface IState {
  darken: boolean;
}

class Header extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      darken: false
    };
  }

  handleScrollHeader = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 75) {
      this.setState({ darken: true });
    } else {
      this.setState({ darken: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollHeader);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollHeader);
  }

  render() {
    const {
      location: { pathname },
      isLoggedIn
    } = this.props;
    const { darken } = this.state;
    return (
      <Container>
        <GradientBackground darken={darken} />
        <List>
          <Link to={"/"}>
            <LogoImage src={Logo} />
          </Link>
          <NavList>
            {isLoggedIn ? (
              <Item current={pathname === "/login"}>
                <SLink to="/login">로그아웃</SLink>
              </Item>
            ) : (
              <>
                <Item current={pathname === "/login"}>
                  <SLink to="/login">로그인</SLink>
                </Item>
                <Item current={pathname === "/register"}>
                  <SLink to="/register">회원가입</SLink>
                </Item>
              </>
            )}
            {/* <Item current={pathname === "/"}>
            <SLink to="/">영화</SLink>
          </Item> */}
            <Item current={pathname === "/search"}>
              <SLink to="/search">검색</SLink>
            </Item>
          </NavList>
        </List>
      </Container>
    );
  }
}

export default withRouter(Header);
