import React from "react";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Container = styled.div`
  background-color: white;
  border: 0.5px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 3rem;
`;

const Form = styled.form`
  color: black;
  a {
    color: black;
    &:hover {
    }
  }
`;

const Title = styled.input``;

interface IState {
  category: number | null;
  title: string;
  body: any;
}

export default class CustomEditor extends React.Component<{}, IState> {
  state = {
    category: null,
    title: "",
    body: null
  };

  handleOnChange = (e: any) => {
    this.setState({ title: e.target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <Container>
        <Form>
          <Title value={title} onChange={this.handleOnChange} />
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            localization={{
              locale: "ko"
            }}
          />
        </Form>
      </Container>
    );
  }
}
