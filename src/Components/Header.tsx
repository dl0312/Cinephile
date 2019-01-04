import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Logo from "../asset/logo.png";

const GradientBackground = styled.div`
  top: 0;
  bottom: -2rem;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1;
  opacity: 0.5;
  background: linear-gradient(to bottom, rgba(20, 20, 20, 1), transparent);
  transition: 1s ease-in-out;
`;

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
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
  margin: 2rem auto 0;
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
  height: 50px;

  position: relative;
  z-index: 2;
`;

interface IItemProps {
  current: boolean;
}

const Item = styled("li")<IItemProps>`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
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

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <GradientBackground />
    <List>
      <Link to={"/"}>
        <LogoImage src={Logo} />
      </Link>
      <NavList>
        <Item current={pathname === "/"}>
          <SLink to="/">영화</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">검색</SLink>
        </Item>
      </NavList>
    </List>
  </Header>
));
