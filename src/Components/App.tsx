import React from "react";
import { Router } from "./Router";
import GlobalStyles from "./GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { IS_LOGGED_IN } from "../sharedQueries.local";
import { graphql } from "react-apollo";

interface IProps {
  data: any;
}

class App extends React.Component<IProps, any> {
  render() {
    const {
      data: {
        auth: { isLoggedIn }
      }
    } = this.props;
    return (
      <>
        <Router isLoggedIn={isLoggedIn} />
        <GlobalStyles />
        <ToastContainer
          draggable={true}
          position={"top-left"}
          autoClose={5000}
          hideProgressBar={true}
          pauseOnHover={true}
        />
      </>
    );
  }
}

export default graphql<IProps>(IS_LOGGED_IN)(App);
