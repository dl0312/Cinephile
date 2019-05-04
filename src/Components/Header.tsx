import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
// import Logo from "../asset/logo.png";
// import { getMyProfile } from "../types/api";
// import { Query } from "react-apollo";
// import { toast } from "react-toastify";
// import HeaderProfile from "./HeaderProfile";
// import { GET_MY_PROFILE_QUERY } from "../sharedQueries";
import HeaderSearch from "./HeaderSearch";

interface IGradientBackgroundProps {
  darken: boolean;
}

const GradientBackground = styled("div")<IGradientBackgroundProps>`
  top: 0;
  bottom: -1rem;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 0;
  opacity: ${props => (props.darken ? "0.95" : "0.5")};
  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 1),
    rgba(20, 20, 20, 0.7),
    transparent
  );
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
      opacity: 0.95;
    }
  }
`;

const List = styled.ul`
  margin: 0 auto;
  height: 6rem;
  min-width: 60rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const LogoImage = styled.img`
//   height: 3rem;
//   position: relative;
//   z-index: 2;
// `;

const LogoText = styled.div`
  all: unset;
  font-size: 2.5rem;
  position: relative;
  z-index: 2;
  font-style: italic;
  font-family: "Playfair Display", serif;
  text-shadow: 0px 5px 5px #0a0e27;
`;

const CustomHeaderContainer = styled.div`
  height: 3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// interface IItemProps {
//   current: boolean;
// }

// const Item = styled("li")<IItemProps>`
//   padding: 0 1rem;
//   height: 3rem;
//   text-align: center;
//   border-bottom: 3px solid
//     ${props => (props.current ? "#3498db" : "transparent")};
//   transition: border-bottom 0.5s ease-in-out;
// `;

// const SLink = styled(Link)`
//   height: 3rem;
//   font-size: 1rem;
//   font-weight: 900;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: "Nanum Gothic", sans-serif;
//   position: relative;
//   z-index: 2;
//   text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
//   /* letter-spacing: 0.5rem; */
// `;

const PlainLink = styled(Link)`
  &:hover {
    color: white;
  }
`;

// class GetMyProfileQuery extends Query<getMyProfile> {}

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
      // location: { pathname },
      // isLoggedIn
    } = this.props;
    const { darken } = this.state;
    return (
      <Container>
        <GradientBackground darken={darken} />
        <List>
          <PlainLink to={"/"}>
            {/* <LogoImage src={Logo} /> */}
            <LogoText>
              <span style={{ color: "#e74c3c", fontWeight: "bolder" }}>C</span>
              in
              <span style={{ color: "#f1c40f", fontWeight: "bolder" }}>e</span>
              <span style={{ color: "#2ecc71", fontWeight: "bolder" }}>p</span>
              hil
              <span style={{ color: "#3498db", fontWeight: "bolder" }}>e</span>
            </LogoText>
          </PlainLink>
          <NavList>
            {/* {isLoggedIn ? (
              <GetMyProfileQuery
                query={GET_MY_PROFILE_QUERY}
              >
                {({ loading, error, data }) => {
                  if (loading) {
                    return null;
                  }
                  if (error) {
                    toast.error(error.message);
                    return null;
                  }
                  if (data !== undefined) {
                    const user = data.GetMyProfile.user;
                    return (
                      user && (
                        <>
                          <CustomHeaderContainer>
                            <HeaderProfile user={user} />
                          </CustomHeaderContainer>
                          <Item current={pathname === `/community`}>
                            <SLink to="/community/1/">영화수다</SLink>
                          </Item>
                          <Item current={pathname === "/ticket"}>
                            <SLink to="/ticket">표나누기</SLink>
                          </Item>
                          <Item current={pathname === "/goods"}>
                            <SLink to="/goods">굿즈나눔 교환</SLink>
                          </Item>
                          <CustomHeaderContainer>
                            <HeaderSearch />
                          </CustomHeaderContainer>
                        </>
                      )
                    );
                  } else {
                    return null;
                  }
                }}
              </GetMyProfileQuery>
            ) : (
              <CustomHeaderContainer>
                <HeaderSearch />
              </CustomHeaderContainer>
            )} */}
            <CustomHeaderContainer>
              <HeaderSearch />
            </CustomHeaderContainer>
          </NavList>
        </List>
      </Container>
    );
  }
}

export default withRouter(Header);
