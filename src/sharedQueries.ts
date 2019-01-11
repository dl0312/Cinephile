import gql from "graphql-tag";

export const FACEBOOK_CONNECT = gql`
  mutation facebookConnect(
    $firstName: String!
    $lastName: String!
    $nickName: String!
    $email: String
    $fbId: String!
  ) {
    FacebookConnect(
      firstName: $firstName
      lastName: $lastName
      nickName: $nickName
      email: $email
      fbId: $fbId
    ) {
      ok
      error
      token
    }
  }
`;

export const GOOGLE_CONNECT = gql`
  mutation googleConnect(
    $firstName: String!
    $lastName: String!
    $nickName: String!
    $email: String
    $profilePhoto: String
    $googleId: String!
  ) {
    GoogleConnect(
      firstName: $firstName
      lastName: $lastName
      nickName: $nickName
      email: $email
      profilePhoto: $profilePhoto
      googleId: $googleId
    ) {
      ok
      error
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation emailSignIn($email: String!, $password: String!) {
    EmailSignIn(email: $email, password: $password) {
      ok
      error
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation emailSignUp(
    $email: String!
    $password: String!
    $nickName: String!
    $gender: String!
    $birthday: String!
  ) {
    EmailSignUp(
      email: $email
      password: $password
      nickName: $nickName
      gender: $gender
      birthday: $birthday
    ) {
      ok
      error
      token
    }
  }
`;

export const GET_MY_PROFILE_QUERY = gql`
  query getMyProfile {
    GetMyProfile {
      ok
      error
      user {
        id
        email
        nickName
        birthday
        gender
        password
        profilePhoto
      }
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query getPostById($postId: Int!) {
    GetPostById(postId: $postId) {
      ok
      error
      post {
        id
        category
        title
        source
        tags
        body
      }
    }
  }
`;

export const GET_POSTS_BY_PAGE = gql`
  query getPostsByPage($page: Int!) {
    GetPostsByPage(page: $page) {
      ok
      error
      posts {
        id
        user {
          id
          nickName
          profilePhoto
        }
        category
        title
        tags
        createdAt
      }
      maxPage
    }
  }
`;

export const EDIT_POST = gql`
  mutation editPost(
    $postId: Int!
    $category: Int!
    $title: String!
    $source: String
    $tags: [String]
    $body: String!
  ) {
    EditPost(
      postId: $postId
      category: $category
      title: $title
      source: $source
      tags: $tags
      body: $body
    ) {
      ok
      error
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost(
    $category: Int!
    $title: String!
    $source: String
    $tags: [String]
    $body: String!
  ) {
    AddPost(
      category: $category
      title: $title
      source: $source
      tags: $tags
      body: $body
    ) {
      ok
      error
      postId
    }
  }
`;
