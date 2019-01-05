import React from "react";
import { Router } from "./Router";
import GlobalStyles from "./GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router />
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

export default App;
