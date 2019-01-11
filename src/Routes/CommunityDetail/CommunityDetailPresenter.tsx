import React from "react";
import styled from "styled-components";
import draftToHtml from "draftjs-to-html";
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import { Link } from "react-router-dom";
import { Button } from "antd";
// import { Editor } from "react-draft-wysiwyg";

const Container = styled.div`
  color: black;
  background-color: white;
`;

const Category = styled.div``;

const Title = styled.div``;

const Source = styled.div``;

const Body = styled.div`
  width: 100%;
`;

const Tags = styled.div``;

interface IProps {
  postId: number;
  category: number;
  title: string;
  source: string | null;
  body: string;
  tags: (string | null)[] | null;
}

const CommunityDetailPresenter: React.SFC<IProps> = ({
  postId,
  category,
  title,
  source,
  body,
  tags
}) => {
  console.log(
    draftToHtml(JSON.parse(body)),
    stateToHTML(convertFromRaw(JSON.parse(body)))
  );
  return (
    <Container>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Source>{source}</Source>
      <Body id="content">
        <div
          dangerouslySetInnerHTML={{
            __html: draftToHtml(JSON.parse(body))
          }}
        />
        {/* <Editor
          editorState={EditorState.createWithContent(
            convertFromRaw(JSON.parse(body))
          )}
          readonly={true}
        /> */}
      </Body>
      <Link to={`/community/edit/${postId}`}>
        <Button icon="edit" type="primary">
          수정하기
        </Button>
      </Link>
      <Tags>{tags}</Tags>
    </Container>
  );
};
export default CommunityDetailPresenter;
