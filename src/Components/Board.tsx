import React from "react";
import styled from "styled-components";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { GET_POSTS_BY_PAGE } from "../sharedQueries";
import UserTag from "./UserTag";
import { getPostsByPage, getPostsByPageVariables } from "../types/api";
// const numeral = require("numeral");

const Container = styled.div`
  background-color: white;
`;

const columns = [
  {
    title: <div style={{ display: "flex", justifyContent: "center" }}>ID</div>,
    key: "id",
    dataIndex: "id",
    width: 50,
    render: (id: number) => (
      <div style={{ display: "flex", justifyContent: "center" }}>{id}</div>
    )
  },
  {
    title: (
      <div style={{ display: "flex", justifyContent: "center" }}>Category</div>
    ),
    key: "category",
    dataIndex: "category",
    render: (category: any) => (
      <>
        <div>{category}</div>
        {/* <CategoryTag category={category} display={"both"} /> */}
      </>
    )
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 300,
    render: (post: any) => (
      <Link
        to={`/community/read/${post.id}`}
        style={{
          textDecoration: "none"
        }}
      >
        {post.title}
      </Link>
    )
  },
  {
    title: (
      <div style={{ display: "flex", justifyContent: "center" }}>User</div>
    ),
    dataIndex: "user",
    key: "user",
    render: (user: any) => (
      <UserTag
        size={"small"}
        display={"both"}
        profilePhoto={user.profilePhoto}
        username={user.nickName}
      />
    )
  },

  {
    title: (
      <div style={{ display: "flex", justifyContent: "center" }}>Tags</div>
    ),
    dataIndex: "tags",
    key: "tags",
    render: (tags: any) => (
      <span style={{ display: "flex", justifyContent: "center" }}>
        {tags && tags.map((tag: any) => <span>{tag}</span>)}
      </span>
    )
  },
  {
    title: (
      <div style={{ display: "flex", justifyContent: "center" }}>Date</div>
    ),
    dataIndex: "date",
    key: "date",
    render: (date: Date) => (
      <span style={{ display: "flex", justifyContent: "center" }}>
        {new Date(date).toLocaleDateString()}
      </span>
    )
  }
];

class GetPostsByPage extends Query<getPostsByPage, getPostsByPageVariables> {}

interface IProps {
  page: number;
}

export default class Board extends React.Component<IProps, {}> {
  render() {
    const { page } = this.props;
    return (
      <Container>
        {/* <Link to={"/community/add"}>
          <Button icon="edit" type="primary">
            글쓰기
          </Button>
        </Link> */}
        <GetPostsByPage
          query={GET_POSTS_BY_PAGE}
          variables={{ page }}
          fetchPolicy={"cache-and-network"}
        >
          {({ loading, data, error }) => {
            if (loading) {
              console.log(loading);
              return "loading";
            }
            if (error) {
              return <div>{error.message}</div>;
            }
            if (data === undefined) {
              return <div>data undefined</div>;
            }
            const { posts } = data.GetPostsByPage;
            const { maxPage } = data.GetPostsByPage;
            const pagenationConfig = {
              total: maxPage,
              current: page,
              locale: "ko-KR",
              pageSize: 20,
              size: "small"
            };
            console.log(posts);
            return (
              <React.Fragment>
                {posts && (
                  <Table
                    style={{}}
                    size={"small"}
                    columns={columns as any}
                    pagination={pagenationConfig}
                    dataSource={posts.map((post: any) => {
                      return {
                        id: post!.id,
                        user: post!.user,
                        category: post!.category,
                        title: post,
                        tags: post!.tags,
                        date: post!.createdAt
                      };
                    })}
                    footer={() => (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end"
                        }}
                      >
                        <Link to={"/community/add"}>
                          <Button icon="edit" type="primary">
                            글쓰기
                          </Button>
                        </Link>
                        <Button size="small">LIST</Button>
                      </div>
                    )}
                    bordered={true}
                  />
                )}
              </React.Fragment>
            );
          }}
        </GetPostsByPage>
      </Container>
    );
  }
}
