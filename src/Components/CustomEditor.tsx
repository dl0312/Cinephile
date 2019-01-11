import React from "react";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
// import Editor from "draft-js-plugins-editor";
import { Dropdown, Menu, Button, Icon } from "antd";
import { EditorState, convertToRaw } from "draft-js";
import { toast } from "react-toastify";
import draftToHtml from "draftjs-to-html";

const Container = styled.div`
  font-size: 0.8rem;
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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Title = styled.input`
  padding: 0 0.5rem;
  width: 100%;
  height: 1.5rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-left: none;
`;

const SourceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;
const SourceTitle = styled.div`
  width: 2rem;
  font-weight: 500;
`;

const Source = styled.input`
  padding: 0 0.5rem;
  width: 100%;
  height: 1.5rem;
  border-radius: 4px;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

interface IProps {
  postId?: number;
  category?: number;
  title?: string;
  source?: string;
  editorState?: EditorState;
  tags?: (string | null)[] | null;
  submitFn: any;
}

interface IState {
  category: number | null;
  categoryName: string | null;
  title: string;
  source: string;
  tags: (string | null)[] | null;
  editorState: EditorState;
}

export default class CustomEditor extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      category: this.props.category !== undefined ? this.props.category : null,
      categoryName:
        this.props.category !== undefined
          ? ["영화 수다", "영화 정보", "극장 수다"][this.props.category - 1]
          : null,
      title: this.props.title !== undefined ? this.props.title : "",
      source: this.props.source !== undefined ? this.props.source : "",
      tags: this.props.tags !== undefined ? this.props.tags : null,
      editorState:
        this.props.editorState !== undefined
          ? this.props.editorState
          : EditorState.createEmpty()
    };
  }

  handleOnChangeTitle = (e: any) => {
    this.setState({ title: e.target.value });
  };

  handleOnChangeSource = (e: any) => {
    this.setState({ source: e.target.value });
  };

  handleOnChangeEditorState = (editorState: EditorState) => {
    this.setState({
      editorState
    });
  };

  handleMenuClick = (e: any) => {
    console.log(e);
    this.setState({
      category: parseInt(e.key),
      categoryName: e.item.props.children
    });
  };

  handleOnSubmit = () => {
    if (this.props.postId === undefined) {
      const { category, title, source, tags, editorState } = this.state;
      console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
      this.props.submitFn({
        variables: {
          category,
          title,
          source,
          tags,
          body: JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        }
      });
    } else {
      const { postId } = this.props;
      const { category, title, source, tags, editorState } = this.state;
      console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
      this.props.submitFn({
        variables: {
          postId,
          category,
          title,
          source,
          tags,
          body: JSON.stringify(convertToRaw(editorState.getCurrentContent()))
        }
      });
    }
  };

  uploadImageCallBack = (file: any) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://api.cloudinary.com/v1_1/clap_image_manager/image/upload"
      );
      const formData = new FormData();
      formData.append("file", file);
      formData.append("api_key", "641929979264519");
      formData.append("upload_preset", "clap_image_manager");
      formData.append("timestamp", String(Date.now() / 1000));
      xhr.send(formData);
      xhr.addEventListener("load", () => {
        const response = {
          data: { link: JSON.parse(xhr.responseText).secure_url }
        };
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

  render() {
    const { category, categoryName, title, source, editorState } = this.state;
    const confirmTitle = title.replace(/ /g, "") !== "";
    const confirmCategory = category !== null;
    const confirmBody = editorState.getCurrentContent().hasText();
    return (
      <Container>
        <Form>
          <TitleContainer>
            <Dropdown
              overlay={
                <Menu onClick={this.handleMenuClick}>
                  <Menu.Item key="1">영화 수다</Menu.Item>
                  <Menu.Item key="2">영화 정보</Menu.Item>
                  <Menu.Item key="3">극장 수다</Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <Button
                size={"small"}
                style={{
                  height: "1.5rem",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0
                }}
              >
                {category ? (
                  <>
                    <span>{categoryName}</span>
                    <Icon type="down" />
                  </>
                ) : (
                  <>
                    <span>분류 선택</span>
                    <Icon type="down" />
                  </>
                )}
              </Button>
            </Dropdown>
            <Title
              placeholder="제목"
              value={title}
              onChange={this.handleOnChangeTitle}
            />
          </TitleContainer>
          <SourceContainer>
            <SourceTitle>출처</SourceTitle>
            <Source
              placeholder="원글이 있다면 출처를 밝혀주세요"
              value={source}
              onChange={this.handleOnChangeSource}
            />
          </SourceContainer>
          <Editor
            editorState={editorState}
            onEditorStateChange={this.handleOnChangeEditorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbar={{
              image: {
                previewImage: true,
                alignmentEnabled: false,
                uploadCallback: this.uploadImageCallBack,
                alt: { present: true, mandatory: false },
                inputAccept:
                  "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                defaultSize: {
                  height: "auto",
                  width: "300px"
                }
              }
            }}
            localization={{
              locale: "ko"
            }}
          />
          <ButtonContainer>
            <Button
              onClick={() => {
                !confirmCategory && toast.warn("분류를 선택해주세요");
                !confirmTitle && toast.warn("제목을 채워주세요");
                !confirmBody && toast.warn("내용을 채워주세요");
                confirmCategory &&
                  confirmTitle &&
                  confirmBody &&
                  this.handleOnSubmit();
              }}
              icon="edit"
              type="primary"
            >
              등록
            </Button>
          </ButtonContainer>
        </Form>
      </Container>
    );
  }
}
