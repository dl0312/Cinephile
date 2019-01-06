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
