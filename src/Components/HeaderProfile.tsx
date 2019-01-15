import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Mutation } from "react-apollo";
import { LOG_USER_OUT } from "../sharedQueries.local";
import { toast } from "react-toastify";

const DownArrow = styled.i`
  position: relative;
  z-index: 3;
  transition: 0.25s ease-in-out;

  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
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
  cursor: pointer;
  &:hover {
    ${MenuContainer} {
      height: 33rem;
    }
    ${DownArrow} {
      transform: rotate(180deg);
    }
  }
`;

const UserNickName = styled.div`
  position: relative;
  z-index: 3;
  margin-right: 0.5rem;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
`;

const Menu = styled.ul`
  padding-top: 3rem;
  border-radius: 5px;
  /* background: #89a; */
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.35), 0 0 10px #000;
`;

const Item = styled.li`
  width: 100%;
  padding: 0.7rem 1.5rem;
  text-align: left;
  border-top: 0.5px solid rgba(0, 0, 0, 0.5);
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: 0.2s ease-in-out;
  &:hover {
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
  }
`;

const ItemIcon = styled.i`
  margin-right: 0.5rem;
  min-width: 1.3rem;
`;

const SLink = styled(Link)`
  width: 100%;
  &:hover {
    color: inherit;
  }
`;

interface IProps extends RouteComponentProps {
  user: any;
}

class HeaderProfile extends React.Component<IProps, {}> {
  render() {
    const { user } = this.props;
    return (
      <Mutation
        mutation={LOG_USER_OUT}
        onCompleted={data => {
          console.log(data);
          toast.success("Log Out Success");
          // this.props.history.push(`/`);
        }}
      >
        {logUserOut => (
          <Container>
            {user.profilePhoto ? (
              <Avatar
                shape="circle"
                // size={"small"}
                src={user.profilePhoto}
                style={{
                  marginRight: "0.5rem",
                  position: "relative",
                  zIndex: 3
                }}
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
            <DownArrow className="fas fa-angle-down" />
            <MenuContainer>
              <Menu>
                <SLink to="/">
                  <Item>
                    <ItemIcon className="fas fa-home" />
                    <span>홈</span>
                  </Item>
                </SLink>
                <Item>
                  <ItemIcon className="far fa-user" />
                  <span>프로필</span>
                </Item>
                <Item>
                  <ItemIcon className="fas fa-film" />
                  <span>내 영화</span>
                </Item>
                <Item>
                  <ItemIcon className="fas fa-pencil-alt" />
                  <span>감상평</span>
                </Item>
                <Item>
                  <ItemIcon className="far fa-bookmark" />
                  <span>보고싶어요</span>
                </Item>
                <Item>
                  <ItemIcon className="far fa-list-alt" />
                  <span>컬렉션</span>
                </Item>
                <Item>
                  <ItemIcon className="far fa-thumbs-up" />
                  <span>좋아요</span>
                </Item>
                <Item>
                  <ItemIcon className="fas fa-hashtag" />
                  <span>태그</span>
                </Item>
                <Item>
                  <ItemIcon className="fab fa-connectdevelop" />
                  <span>네트워크</span>
                </Item>
                <Item>
                  <ItemIcon className="fas fa-cogs" />
                  <span>설정</span>
                </Item>
                <Item
                  onClick={() => {
                    logUserOut();
                  }}
                >
                  <ItemIcon className="fas fa-sign-out-alt" />
                  <span>로그아웃</span>
                </Item>
              </Menu>
            </MenuContainer>
          </Container>
        )}
      </Mutation>
    );
  }
}

export default withRouter(HeaderProfile);
