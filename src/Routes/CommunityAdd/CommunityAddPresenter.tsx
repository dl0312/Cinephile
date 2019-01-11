import React from "react";
import styled from "styled-components";
import CustomEditor from "../../Components/CustomEditor";

const Container = styled.div``;

// class AddPostQuery extends Mutation<addPost, addPostVariables> {}

interface IProps {
  AddPost: any;
}

const CommunityAddPresenter: React.SFC<IProps> = ({ AddPost }: any) => {
  return (
    <Container>
      <CustomEditor submitFn={AddPost} />
    </Container>
  );
};

export default CommunityAddPresenter;
