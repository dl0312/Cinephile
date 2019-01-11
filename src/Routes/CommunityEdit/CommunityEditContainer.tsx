import React from "react";
import { GET_POST_BY_ID, EDIT_POST } from "../../sharedQueries";
import { Query, Mutation } from "react-apollo";
import CommunityEditPresenter from "./CommunityEditPresenter";
import { getPostById, getPostByIdVariables } from "../../types/api";
import { RouteComponentProps } from "react-router";
import { toast } from "react-toastify";
import { convertFromRaw, EditorState } from "draft-js";

class GetPostByIdQuery extends Query<getPostById, getPostByIdVariables> {}

// class EditPostByIdMutation extends Mutation<>{}

interface IProps extends RouteComponentProps<any> {}

export default class CommunityEditContainer extends React.Component<
  IProps,
  {}
> {
  confirm = (data: any) => {
    const { EditPost } = data;
    if (EditPost.ok) {
      toast.success("Edit Post Success");
      this.props.history.push(
        `/community/read/${this.props.match.params.postId}`
      );
    } else {
      toast.error(EditPost.error);
    }
  };

  render() {
    console.log(this.props);
    const postId = parseInt(this.props.match.params.postId);
    return (
      <GetPostByIdQuery query={GET_POST_BY_ID} variables={{ postId }}>
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
              <Mutation
                mutation={EDIT_POST}
                onCompleted={data => this.confirm(data)}
              >
                {EditPost =>
                  post && (
                    <CommunityEditPresenter
                      postId={postId}
                      category={post.category}
                      title={post.title}
                      source={post.source}
                      editorState={EditorState.createWithContent(
                        convertFromRaw(JSON.parse(post.body))
                      )}
                      tags={post.tags}
                      EditPost={EditPost}
                    />
                  )
                }
              </Mutation>
            );
          } else {
            return null;
          }
        }}
      </GetPostByIdQuery>
    );
  }
}
