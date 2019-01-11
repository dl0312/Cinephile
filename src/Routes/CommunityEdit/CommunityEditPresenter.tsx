import React from "react";
import styled from "styled-components";
import { EditorState } from "draft-js";
import CustomEditor from "../../Components/CustomEditor";
// import { Editor } from "react-draft-wysiwyg";

const Container = styled.div``;

interface IProps {
  postId: number;
  category: number;
  title: string;
  source: string;
  editorState: EditorState;
  tags: (string | null)[] | null;
  EditPost: any;
}

const CommunityEditPresenter: React.SFC<IProps> = ({
  postId,
  category,
  title,
  source,
  editorState,
  tags,
  EditPost
}) => {
  return (
    <Container>
      <CustomEditor
        postId={postId}
        category={category}
        title={title}
        source={source}
        editorState={editorState}
        tags={tags}
        submitFn={EditPost}
      />
    </Container>
  );
};
export default CommunityEditPresenter;
