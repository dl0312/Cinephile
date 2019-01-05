import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import client from "./apollo";
import { ApolloProvider } from "react-apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
