import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import MovieDetail from "../Routes/MovieDetail";
import Search from "../Routes/Search";
import Header from "./Header";
import LogIn from "../Routes/LogIn";
import Register from "../Routes/Register";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 6rem;
  padding: 2rem;
`;

export const Router: React.SFC = () => (
  <>
    <Switch>
      <Route path="/login" exact={true} component={LogIn} />
      <Route path="/register" exact={true} component={Register} />
      <Route
        path={"*"}
        exact={true}
        render={({ location }) => (
          <>
            <Header />
            <Container>
              <Route path="/film/:id" component={MovieDetail} />
              <Route path="/" exact component={Home} />
              <Route path="/director/:id" exact component={Home} />
              <Route path="/films/year/:year" exact component={Home} />
              <Route path="/film" exact component={Home} />
              <Route path="/film" exact component={Home} />
              <Route path="/search" component={Search} />
              <Redirect from="*" to="/" />
            </Container>
          </>
        )}
      />
    </Switch>
  </>
);
