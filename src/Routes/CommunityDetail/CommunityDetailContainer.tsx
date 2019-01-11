import React from "react";
import { GET_POST_BY_ID } from "../../sharedQueries";
import { Query } from "react-apollo";
import CommunityDetailPresenter from "./CommunityDetailPresenter";
import { getPostById, getPostByIdVariables } from "../../types/api";
import { RouteComponentProps } from "react-router";

class GetPostByIdQuery extends Query<getPostById, getPostByIdVariables> {}

interface IProps extends RouteComponentProps<any> {}

export default class CommunityDetailContainer extends React.Component<
  IProps,
  {}
> {
  render() {
    console.log(this.props);
    const postId = parseInt(this.props.match.params.postId);
    return (
      <GetPostByIdQuery
        query={GET_POST_BY_ID}
        variables={{ postId }}
        fetchPolicy={"network-only"}
      >
        {({ loading, error, data }) => {
          if (loading) {
            return "loading";
          }
          if (error) {
            console.log(error.message);
            return null;
          }
          if (data !== undefined) {
            console.log(data);
            const { post } = data.GetPostById;
            return (
              post && (
                <CommunityDetailPresenter
                  postId={postId}
                  category={post.category}
                  title={post.title}
                  source={post.source}
                  body={post.body}
                  tags={post.tags}
                />
              )
            );
          } else {
            return null;
          }
        }}
      </GetPostByIdQuery>
    );
  }
}
