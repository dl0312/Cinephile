/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: facebookConnect
// ====================================================

export interface facebookConnect_FacebookConnect {
  __typename: "FacebookConnectResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface facebookConnect {
  FacebookConnect: facebookConnect_FacebookConnect;
}

export interface facebookConnectVariables {
  firstName: string;
  lastName: string;
  nickName: string;
  email?: string | null;
  fbId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: googleConnect
// ====================================================

export interface googleConnect_GoogleConnect {
  __typename: "GoogleConnectResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface googleConnect {
  GoogleConnect: googleConnect_GoogleConnect;
}

export interface googleConnectVariables {
  firstName: string;
  lastName: string;
  nickName: string;
  email?: string | null;
  profilePhoto?: string | null;
  googleId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSignIn
// ====================================================

export interface emailSignIn_EmailSignIn {
  __typename: "EmailSignInResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface emailSignIn {
  EmailSignIn: emailSignIn_EmailSignIn;
}

export interface emailSignInVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSignUp
// ====================================================

export interface emailSignUp_EmailSignUp {
  __typename: "EmailSignUpResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface emailSignUp {
  EmailSignUp: emailSignUp_EmailSignUp;
}

export interface emailSignUpVariables {
  email: string;
  password: string;
  nickName: string;
  gender: string;
  birthday: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyProfile
// ====================================================

export interface getMyProfile_GetMyProfile_user {
  __typename: "User";
  id: number;
  email: string | null;
  nickName: string;
  birthday: string | null;
  gender: string | null;
  password: string | null;
  profilePhoto: string | null;
}

export interface getMyProfile_GetMyProfile {
  __typename: "GetMyProfileResponse";
  ok: boolean;
  error: string | null;
  user: getMyProfile_GetMyProfile_user | null;
}

export interface getMyProfile {
  GetMyProfile: getMyProfile_GetMyProfile;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPostById
// ====================================================

export interface getPostById_GetPostById_post {
  __typename: "Post";
  id: number;
  category: number;
  title: string;
  source: string;
  tags: (string | null)[] | null;
  body: string;
}

export interface getPostById_GetPostById {
  __typename: "GetPostByIdResponse";
  ok: boolean;
  error: string | null;
  post: getPostById_GetPostById_post | null;
}

export interface getPostById {
  GetPostById: getPostById_GetPostById;
}

export interface getPostByIdVariables {
  postId: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPostsByPage
// ====================================================

export interface getPostsByPage_GetPostsByPage_posts_user {
  __typename: "User";
  id: number;
  nickName: string;
  profilePhoto: string | null;
}

export interface getPostsByPage_GetPostsByPage_posts {
  __typename: "Post";
  id: number;
  user: getPostsByPage_GetPostsByPage_posts_user;
  category: number;
  title: string;
  tags: (string | null)[] | null;
  createdAt: string;
}

export interface getPostsByPage_GetPostsByPage {
  __typename: "GetPostsByPageResponse";
  ok: boolean;
  error: string | null;
  posts: (getPostsByPage_GetPostsByPage_posts | null)[];
  maxPage: number;
}

export interface getPostsByPage {
  GetPostsByPage: getPostsByPage_GetPostsByPage;
}

export interface getPostsByPageVariables {
  page: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editPost
// ====================================================

export interface editPost_EditPost {
  __typename: "EditPostResponse";
  ok: boolean;
  error: string | null;
}

export interface editPost {
  EditPost: editPost_EditPost;
}

export interface editPostVariables {
  postId: number;
  category: number;
  title: string;
  source?: string | null;
  tags?: (string | null)[] | null;
  body: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addPost
// ====================================================

export interface addPost_AddPost {
  __typename: "AddPostResponse";
  ok: boolean;
  error: string | null;
  postId: number | null;
}

export interface addPost {
  AddPost: addPost_AddPost;
}

export interface addPostVariables {
  category: number;
  title: string;
  source?: string | null;
  tags?: (string | null)[] | null;
  body: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
