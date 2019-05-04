import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import client from "./apollo";
import { ApolloProvider } from "react-apollo";
import ScrollToTop from "./Components/ScrollToTop";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <ScrollToTop>
        <Route path="*" component={App} />
      </ScrollToTop>
    </Router>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
