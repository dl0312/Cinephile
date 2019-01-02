import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "../Routes/Home";
import MovieDetail from "../Routes/MovieDetail";
import Search from "../Routes/Search";
import Header from "./Header";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;

export const Router: React.SFC = () => (
  <>
    <Header />
    <Switch>
      <Route path="/film/:id" component={MovieDetail} />
      <Container>
        <Route path="/" exact component={Home} />
        <Route path="/director/:id" exact component={Home} />
        <Route path="/films/year/:year" exact component={Home} />
        <Route path="/film" exact component={Home} />
        <Route path="/film" exact component={Home} />
        <Route path="/search" component={Search} />
      </Container>
      <Redirect from="*" to="/" />
    </Switch>
  </>
);
