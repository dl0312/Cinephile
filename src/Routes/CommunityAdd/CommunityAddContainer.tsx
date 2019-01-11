import React from "react";
import { Mutation } from "react-apollo";
import { ADD_POST } from "../../sharedQueries";
import CommunityAddPresenter from "./CommunityAddPresenter";
import { toast } from "react-toastify";

// class AddPostQuery extends Mutation<addPost, addPostVariables> {}

interface IProps {
  history: any;
}

export default class CommunityAddContainer extends React.Component<IProps, {}> {
  confirm = (data: any) => {
    console.log(data);
    const { AddPost } = data;
    if (AddPost.ok) {
      const { postId } = AddPost;
      toast.success("Post Add Success");
      this.props.history.push(`/community/read/${postId}/`);
    } else {
      toast.error(AddPost.error);
    }
  };

  render() {
    return (
      <Mutation mutation={ADD_POST} onCompleted={this.confirm}>
        {AddPost => <CommunityAddPresenter AddPost={AddPost} />}
      </Mutation>
    );
  }
}
