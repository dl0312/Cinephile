import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";

const DownArrow = styled.i`
  position: relative;
  z-index: 3;
  margin-top: -0.4rem;
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0px;
  z-index: 1;
  overflow: hidden;
  transition: 0.5s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 900;
  font-family: "Nanum Gothic", sans-serif;
  position: relative;
  z-index: 2;
  /* transition: 0.5s ease-in-out; */
  background-color: transparent;
  background-image: transparent;
  cursor: pointer;
  &:hover {
    ${MenuContainer} {
      height: 32.5rem;
    }
  }
`;

const UserNickName = styled.div`
  position: relative;
  z-index: 3;
  margin-right: 0.5rem;
`;

const Menu = styled.ul`
  padding-top: 3rem;
  border-radius: 5px;
  background: #89a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.35), 0 0 10px #000;
`;

const Item = styled.li`
  width: 100%;
  padding: 0.7rem 2rem;
  text-align: left;
  border-top: 0.5px solid rgba(0, 0, 0, 0.5);
`;

interface IProps {
  user: any;
}

export default class HeaderProfile extends React.Component<IProps, {}> {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <Container>
        {user.profilePhoto ? (
          <Avatar
            shape="circle"
            // size={"small"}
            src={user.profilePhoto}
            style={{ marginRight: "0.5rem", position: "relative", zIndex: 3 }}
          />
        ) : (
          <Avatar
            shape="circle"
            // size={"small"}
            style={{
              backgroundColor: "#aaa",
              marginRight: "0.5rem",
              position: "relative",
              zIndex: 3
            }}
            icon="user"
          />
        )}
        <UserNickName>{user.nickName}</UserNickName>
        <DownArrow className="fas fa-sort-down" />
        <MenuContainer>
          <Menu>
            <Item>홈</Item>
            <Item>프로필</Item>
            <Item>내 영화</Item>
            <Item>다이어리</Item>
            <Item>내 리뷰</Item>
            <Item>내가 본 영화</Item>
            <Item>내 컬렉션</Item>
            <Item>좋아요</Item>
            <Item>태그</Item>
            <Item>네트워크</Item>
            <Item>설정</Item>
            <Item>로그아웃</Item>
          </Menu>
        </MenuContainer>
      </Container>
    );
  }
}
